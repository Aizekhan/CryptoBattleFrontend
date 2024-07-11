export const getCardListByTag = (userStats, tag) => {
    switch (tag) {
        case 'goldMine':
            return userStats.mines;
        case 'heroStat':
        case 'equip':
            return userStats.equipment;
        case 'battleCard':
        case 'farmSkill':
            const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
            if (currentHero) {
                return currentHero[tag];
            }
            return [];
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
