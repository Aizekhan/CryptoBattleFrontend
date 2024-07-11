import React, { createContext, useContext, useState, useEffect } from 'react';
import heroesConfig from './heroesConfig';
import cardsConfig from '../components/Cards/cardsConfig'; // Імпортуємо конфігурацію карток

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    // Вибраний герой за замовчуванням
    const currentHero = heroesConfig[0];

    const mapIdsToCards = (ids) => {
        return ids.map(id => cardsConfig.find(card => card.id === id));
    };

    const [userStats, setUserStats] = useState({
        username: 'Player',
        level: 0,
        tapIncome: currentHero.baseIncome.goldPerTap,
        incomePer8Hours: currentHero.baseIncome.goldPer8Hours,
        balance: 500,
        currentHeroId: currentHero.id,
        heroes: heroesConfig.map(hero => ({
            ...hero,
            passiveSkills: mapIdsToCards(hero.defaultPassiveSkills),
            equipment: mapIdsToCards(hero.defaultEquipment),
            battleCards: mapIdsToCards(hero.defaultBattleCards),
            farmSkills: mapIdsToCards(hero.defaultFarmSkills),
            townCards: mapIdsToCards(hero.townCards),
            locationCards: mapIdsToCards(hero.locationCards),
            dungeonCards: mapIdsToCards(hero.dungeonCards),
            monsterCards: mapIdsToCards(hero.monsterCards),
            minesGoldCards: mapIdsToCards(hero.minesGoldCards),
            miningSkillsCards: mapIdsToCards(hero.miningSkillsCards),
            heroFarmSkillsCards: mapIdsToCards(hero.heroFarmSkillsCards),
            heroBattleCards: mapIdsToCards(hero.heroBattleCards),
            heroPassiveSkillsCards: mapIdsToCards(hero.heroPassiveSkillsCards),
            heroEquipmentCards: mapIdsToCards(hero.heroEquipmentCards),
            activeSkills: mapIdsToCards(hero.activeSkills)
        }))
    });

    useEffect(() => {
        const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
        if (currentHero) {
            setUserStats(prevStats => ({
                ...prevStats,
                tapIncome: currentHero.baseIncome.goldPerTap,
                incomePer8Hours: currentHero.baseIncome.goldPer8Hours
            }));
        }
    }, [userStats.currentHeroId, userStats.heroes]);

    const updateUserStats = (newStats) => {
        setUserStats(prevStats => ({
            ...prevStats,
            ...newStats
        }));
    };

    const updateHeroStats = (heroId, newStats) => {
        setUserStats(prevStats => {
            const updatedHeroes = prevStats.heroes.map(hero =>
                hero.id === heroId ? { ...hero, ...newStats } : hero
            );
            return { ...prevStats, heroes: updatedHeroes };
        });
    };

    const setCurrentHero = (heroId) => {
        setUserStats(prevStats => ({
            ...prevStats,
            currentHeroId: heroId
        }));
    };

    const updateHeroPassiveSkills = (heroId, newSkills) => {
        updateHeroStats(heroId, { passiveSkills: newSkills });
    };

    const updateHeroEquipment = (heroId, newEquipment) => {
        updateHeroStats(heroId, { equipment: newEquipment });
    };

    const updateHeroBattleCards = (heroId, newBattleCards) => {
        updateHeroStats(heroId, { battleCards: newBattleCards });
    };

    const updateHeroFarmSkills = (heroId, newFarmSkills) => {
        updateHeroStats(heroId, { farmSkills: newFarmSkills });
    };

    const updateHeroTownCards = (heroId, newTownCards) => {
        updateHeroStats(heroId, { townCards: newTownCards });
    };

    const updateHeroLocationCards = (heroId, newLocationCards) => {
        updateHeroStats(heroId, { locationCards: newLocationCards });
    };

    const updateHeroDungeonCards = (heroId, newDungeonCards) => {
        updateHeroStats(heroId, { dungeonCards: newDungeonCards });
    };

    const updateHeroMonsterCards = (heroId, newMonsterCards) => {
        updateHeroStats(heroId, { monsterCards: newMonsterCards });
    };

    const updateHeroMinesGoldCards = (heroId, newMinesGoldCards) => {
        updateHeroStats(heroId, { minesGoldCards: newMinesGoldCards });
    };

    const updateHeroMiningSkillsCards = (heroId, newMiningSkillsCards) => {
        updateHeroStats(heroId, { miningSkillsCards: newMiningSkillsCards });
    };

    const updateHeroHeroFarmSkillsCards = (heroId, newHeroFarmSkillsCards) => {
        updateHeroStats(heroId, { heroFarmSkillsCards: newHeroFarmSkillsCards });
    };

    const updateHeroHeroBattleCards = (heroId, newHeroBattleCards) => {
        updateHeroStats(heroId, { heroBattleCards: newHeroBattleCards });
    };

    const updateHeroHeroPassiveSkillsCards = (heroId, newHeroPassiveSkillsCards) => {
        updateHeroStats(heroId, { heroPassiveSkillsCards: newHeroPassiveSkillsCards });
    };

    const updateHeroHeroEquipmentCards = (heroId, newHeroEquipmentCards) => {
        updateHeroStats(heroId, { heroEquipmentCards: newHeroEquipmentCards });
    };

    const updateHeroActiveSkills = (heroId, newActiveSkills) => {
        updateHeroStats(heroId, { activeSkills: newActiveSkills });
    };

    const levelUpCurrentHero = () => {
        updateHeroStats(userStats.currentHeroId, { level: userStats.heroes.find(hero => hero.id === userStats.currentHeroId).level + 1 });
    };

    return (
        <UserStatsContext.Provider value={{
            userStats,
            updateUserStats,
            updateHeroStats,
            setCurrentHero,
            updateHeroPassiveSkills,
            updateHeroEquipment,
            updateHeroBattleCards,
            updateHeroFarmSkills,
            updateHeroTownCards,
            updateHeroLocationCards,
            updateHeroDungeonCards,
            updateHeroMonsterCards,
            updateHeroMinesGoldCards,
            updateHeroMiningSkillsCards,
            updateHeroHeroFarmSkillsCards,
            updateHeroHeroBattleCards,
            updateHeroHeroPassiveSkillsCards,
            updateHeroHeroEquipmentCards,
            updateHeroActiveSkills,
            levelUpCurrentHero
        }}>
            {children}
        </UserStatsContext.Provider>
    );
};
