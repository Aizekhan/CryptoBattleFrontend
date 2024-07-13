import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import cardsConfig from '../components/Cards/cardsConfig';
import saveUserProgress from './saveUserProgress';

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

const allCardTypes = [
    'passiveSkills',
    'equipment',
    'battleCards',
    'farmSkills',
    'townCards',
    'locationCards',
    'dungeonCards',
    'monsterCards',
    'minesGoldCards',
    'miningSkillsCards',
    'activeSkills'
];

export const UserStatsProvider = ({ children }) => {
    const calculateCardStats = (card, level) => {
        const { baseEffect, effectScale } = card;
        return {
            ...card,
            level,
            effectValue: baseEffect * Math.pow(effectScale, level),
        };
    };

    const mapCardsWithStats = (cards) => {
        return cards.map(card => {
            const baseCard = cardsConfig.find(c => c.id === card.id);
            return calculateCardStats(baseCard, card.level);
        });
    };

    const initializeHero = useCallback((hero) => {
        const heroWithStats = { ...hero };
        allCardTypes.forEach(cardType => {
            if (Array.isArray(hero[cardType])) {
                heroWithStats[cardType] = mapCardsWithStats(hero[cardType]);
            }
        });
        return heroWithStats;
    }, []);

    const loadUserStats = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/userProgress`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            const data = response.data;
            data.heroes = data.heroes.map(initializeHero);
            return data;
        } catch (error) {
            console.error('Error loading user progress:', error);
            return null;
        }
    }, [initializeHero]);

    const [userStats, setUserStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadUserStats();
            if (data) {
                setUserStats(data);
            } else {
                // redirect to ChooseHero if no user progress found
                window.location.href = '/choose-hero';
            }
        };
        fetchData();
    }, [loadUserStats]);

    useEffect(() => {
        const currentHero = userStats?.heroes.find(hero => hero.id === userStats.currentHeroId);
        if (currentHero) {
            setUserStats(prevStats => ({
                ...prevStats,
                tapIncome: currentHero.baseIncome.goldPerTap,
                incomePer8Hours: currentHero.baseIncome.goldPer8Hours
            }));
        }
    }, [userStats?.currentHeroId, userStats?.heroes]);

    const updateUserStats = (newStats) => {
        setUserStats(prevStats => {
            const updatedStats = { ...prevStats, ...newStats };
            saveUserProgress(updatedStats);
            return updatedStats;
        });
    };

    const updateHeroStats = (heroId, newStats) => {
        setUserStats(prevStats => {
            const updatedHeroes = prevStats.heroes.map(hero =>
                hero.id === heroId ? { ...hero, ...newStats } : hero
            );
            const updatedStats = { ...prevStats, heroes: updatedHeroes };
            saveUserProgress(updatedStats);
            return updatedStats;
        });
    };

    const setCurrentHero = (heroId) => {
        setUserStats(prevStats => {
            const updatedStats = { ...prevStats, currentHeroId: heroId };
            saveUserProgress(updatedStats);
            return updatedStats;
        });
    };

    const createHeroUpdateFunction = (field) => (heroId, newValues) => {
        updateHeroStats(heroId, { [field]: newValues });
    };

    const upgradeCard = (heroId, cardId) => {
        setUserStats(prevStats => {
            const hero = prevStats.heroes.find(hero => hero.id === heroId);
            const card = allCardTypes.flatMap(cardType => hero[cardType]).find(card => card.id === cardId);

            const newLevel = card.level + 1;
            const updatedCard = calculateCardStats(card, newLevel);
            const updatedHero = { ...hero };

            allCardTypes.forEach(cardType => {
                if (hero[cardType]) {
                    updatedHero[cardType] = hero[cardType].map(c => c.id === cardId ? updatedCard : c);
                }
            });

            const updatedHeroes = prevStats.heroes.map(h => h.id === heroId ? updatedHero : h);
            const updatedStats = {
                ...prevStats,
                heroes: updatedHeroes,
                level: prevStats.level + 1
            };
            saveUserProgress(updatedStats);
            return updatedStats;
        });
    };

    return (
        <UserStatsContext.Provider value={{
            userStats,
            updateUserStats,
            updateHeroStats,
            setCurrentHero,
            upgradeCard,
            ...Object.fromEntries(allCardTypes.map(cardType => [
                `updateHero${cardType.charAt(0).toUpperCase() + cardType.slice(1)}`,
                createHeroUpdateFunction(cardType)
            ]))
        }}>
            {children}
        </UserStatsContext.Provider>
    );
};
