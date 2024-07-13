import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import cardsConfig from '../components/Cards/cardsConfig';
import saveUserProgress from './saveUserProgress';

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

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
        return {
            ...hero,
            passiveSkills: mapCardsWithStats(hero.passiveSkills),
            equipment: mapCardsWithStats(hero.equipment),
            battleCards: mapCardsWithStats(hero.battleCards),
            farmSkills: mapCardsWithStats(hero.farmSkills),
            townCards: mapCardsWithStats(hero.townCards),
            locationCards: mapCardsWithStats(hero.locationCards),
            dungeonCards: mapCardsWithStats(hero.dungeonCards),
            monsterCards: mapCardsWithStats(hero.monsterCards),
            minesGoldCards: mapCardsWithStats(hero.minesGoldCards),
            miningSkillsCards: mapCardsWithStats(hero.miningSkillsCards),
            activeSkills: mapCardsWithStats(hero.activeSkills),
            UpgradeCost: hero.UpgradeCost || 100,
            UpgradeScale: hero.UpgradeScale || 1.2,
        };
    }, []);

    const loadUserStats = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/userProgress`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            const data = response.data;
            return {
                username: data.username,
                level: data.level,
                experience: data.experience,
                balance: data.balance,
                totalIncomePer8Hours: data.totalIncomePer8Hours,
                totalTapIncome: data.totalTapIncome,
                currentHeroId: data.currentHeroId,
                heroes: data.heroes.map(initializeHero)
            };
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
            const card = hero.passiveSkills.find(card => card.id === cardId) ||
                hero.equipment.find(card => card.id === cardId) ||
                hero.battleCards.find(card => card.id === cardId) ||
                hero.farmSkills.find(card => card.id === cardId) ||
                hero.townCards.find(card => card.id === cardId) ||
                hero.locationCards.find(card => card.id === cardId) ||
                hero.dungeonCards.find(card => card.id === cardId) ||
                hero.monsterCards.find(card => card.id === cardId) ||
                hero.minesGoldCards.find(card => card.id === cardId) ||
                hero.miningSkillsCards.find(card => card.id === cardId) ||
                hero.activeSkills.find(card => card.id === card.id);

            const newLevel = card.level + 1;
            const updatedCard = calculateCardStats(card, newLevel);
            const updatedHero = {
                ...hero,
                passiveSkills: hero.passiveSkills.map(c => c.id === cardId ? updatedCard : c),
                equipment: hero.equipment.map(c => c.id === cardId ? updatedCard : c),
                battleCards: hero.battleCards.map(c => c.id === cardId ? updatedCard : c),
                farmSkills: hero.farmSkills.map(c => c.id === cardId ? updatedCard : c),
                townCards: hero.townCards.map(c => c.id === cardId ? updatedCard : c),
                locationCards: hero.locationCards.map(c => c.id === cardId ? updatedCard : c),
                dungeonCards: hero.dungeonCards.map(c => c.id === cardId ? updatedCard : c),
                monsterCards: hero.monsterCards.map(c => c.id === cardId ? updatedCard : c),
                minesGoldCards: hero.minesGoldCards.map(c => c.id === cardId ? updatedCard : c),
                miningSkillsCards: hero.miningSkillsCards.map(c => c.id === cardId ? updatedCard : c),
                activeSkills: hero.activeSkills.map(c => c.id === cardId ? updatedCard : c),
                UpgradeCost: hero.UpgradeCost * hero.UpgradeScale,
            };
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
            updateHeroPassiveSkills: createHeroUpdateFunction('passiveSkills'),
            updateHeroEquipment: createHeroUpdateFunction('equipment'),
            updateHeroBattleCards: createHeroUpdateFunction('battleCards'),
            updateHeroFarmSkills: createHeroUpdateFunction('farmSkills'),
            updateHeroTownCards: createHeroUpdateFunction('townCards'),
            updateHeroLocationCards: createHeroUpdateFunction('locationCards'),
            updateHeroDungeonCards: createHeroUpdateFunction('dungeonCards'),
            updateHeroMonsterCards: createHeroUpdateFunction('monsterCards'),
            updateHeroMinesGoldCards: createHeroUpdateFunction('minesGoldCards'),
            updateHeroMiningSkillsCards: createHeroUpdateFunction('miningSkillsCards'),
            updateHeroActiveSkills: createHeroUpdateFunction('activeSkills'),
            upgradeCard,
            levelUpCurrentHero: () => {
                const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
                if (currentHero) {
                    updateHeroStats(userStats.currentHeroId, {
                        level: currentHero.level + 1,
                        UpgradeCost: currentHero.UpgradeCost * currentHero.UpgradeScale
                    });
                }
            }
        }}>
            {children}
        </UserStatsContext.Provider>
    );
};
