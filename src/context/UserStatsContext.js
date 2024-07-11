import React, { createContext, useContext, useState, useEffect } from 'react';
import heroesConfig from './heroesConfig'; // Імпорт конфігурації героїв

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    // Вибраний герой за замовчуванням
    const currentHero = heroesConfig[0];

    const [userStats, setUserStats] = useState({
        username: 'Player',
        level: 0,
        tapIncome: currentHero.baseIncome.goldPerTap, // Ініціалізація tapIncome на основі поточного героя
        incomePer8Hours: currentHero.baseIncome.goldPer8Hours, // Додано новий параметр
        balance: 500,
        currentHeroId: currentHero.id,  // Вибраний герой за замовчуванням
        heroes: heroesConfig.map(hero => ({
            ...hero,
            passiveSkills: hero.defaultPassiveSkills,
            equipment: hero.defaultEquipment,
            battleCards: hero.defaultBattleCards,
            farmSkills: hero.defaultFarmSkills,
            townCards: hero.townCards,
            locationCards: hero.locationCards,
            dungeonCards: hero.dungeonCards,
            monsterCards: hero.monsterCards,
            minesGoldCards: hero.minesGoldCards,
            miningSkillsCards: hero.miningSkillsCards,
            heroFarmSkillsCards: hero.heroFarmSkillsCards,
            heroBattleCards: hero.heroBattleCards,
            heroPassiveSkillsCards: hero.heroPassiveSkillsCards,
            heroEquipmentCards: hero.heroEquipmentCards,
            activeSkills: hero.activeSkills  // Додано новий тип карток
        }))  // Завантажуємо героїв з конфігураційного файлу
    });

    useEffect(() => {
        const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
        if (currentHero) {
            setUserStats(prevStats => ({
                ...prevStats,
                tapIncome: currentHero.baseIncome.goldPerTap,
                incomePer8Hours: currentHero.baseIncome.goldPer8Hours // Оновлення incomePer8Hours при зміні героя
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
            levelUpCurrentHero  // Додано новий метод
        }}>
            {children}
        </UserStatsContext.Provider>
    );
};
