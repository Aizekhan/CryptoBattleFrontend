export const getCardListByTag = (userStats, tag) => {
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    if (!currentHero) return [];

    switch (tag) {
        case 'goldMine':
            return currentHero.minesGoldCards;
        case 'heroStat':
            return currentHero.passiveSkills;
        case 'equip':
            return currentHero.equipment;
        case 'battleCard':
            return currentHero.battleCards;
        case 'farmSkill':
            return currentHero.farmSkills;
        case 'town':
            return currentHero.townCards;
        case 'location':
            return currentHero.locationCards;
        case 'dungeon':
            return currentHero.dungeonCards;
        case 'monster':
            return currentHero.monsterCards;
        case 'miningSkill':
            return currentHero.miningSkillsCards;
        case 'activeSkill':
            return currentHero.activeSkills;
        default:
            return [];
    }
};

export const prerequisitesMet = (userStats, card) => {
    const cardList = getCardListByTag(userStats, card.tag);
    return card.prerequisites.every(prereq => {
        const prereqCard = cardList.find(c => c.id === prereq.id);
        return prereqCard && prereqCard.level >= prereq.level;
    });
};
