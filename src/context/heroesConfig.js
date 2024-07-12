import { getHeroImages } from './heroImages';

const heroesConfig = [
    {
        id: 'hero_1_id',
        level: 1,
        name: 'Hero 1',
        race: 'Human',
        religion: 'none',
        ideology: 'Techno',
        class: 'Warrior',
        profa1: 'Blacksmith',
        profa2: 'Miner',
        profa3: 'Warrior Trainer',
        baseStats: {
            hp: 100,
            armor: 5,
            damage: 5,
            attackSpeed: 1,
            blockChance: 50,
            penetrationChance: 50,
            critChance: 50,
            dodgeChance: 50,
            critPower: 150,
            accuracy: 90,
            regenSpeed: 5
        },
        baseIncome: {
            goldPerTap: 10,
            goldPer8Hours: 80,
            commonItemChance: 10,
            rareItemChance: 5,
            epicItemChance: 1,
            legendaryItemChance: 0.5,
            uniqueItemChance: 0.1
        },
        img: getHeroImages('hero1'),
        defaultCards: {
            passiveSkills: [1, 2],
            equipment: [1, 2],
            battleCards: [1, 2],
            farmSkills: [1, 2],
            townCards: [1, 2],
            locationCards: [1, 2],
            dungeonCards: [1, 2],
            monsterCards: [1, 2],
            minesGoldCards: [1, 2, 3],
            miningSkillsCards: [1, 2],
            activeSkills: [1, 2]
        }
    },
    {
        id: 'hero_2_id',
        level: 1,
        name: 'Hero 2',
        race: 'Orc',
        religion: 'none',
        ideology: 'Nature',
        class: 'Shaman',
        profa1: 'Herbalist',
        profa2: 'Hunter',
        profa3: 'Beastmaster',
        baseStats: {
            hp: 150,
            armor: 15,
            damage: 20,
            attackSpeed: 1.0,
            blockChance: 10,
            penetrationChance: 10,
            critChance: 10,
            dodgeChance: 10,
            critPower: 175,
            accuracy: 85,
            regenSpeed: 7
        },
        baseIncome: {
            goldPerTap: 15,
            goldPer8Hours: 120,
            commonItemChance: 15,
            rareItemChance: 7,
            epicItemChance: 2,
            legendaryItemChance: 1,
            uniqueItemChance: 0.2
        },
        img: getHeroImages('hero2'),
        defaultCards: {
            passiveSkills: [3, 4],
            equipment: [3, 4],
            battleCards: [3, 4],
            farmSkills: [3, 4],
            townCards: [3, 4],
            locationCards: [3, 4],
            dungeonCards: [3, 4],
            monsterCards: [3, 4],
            minesGoldCards: [3, 4],
            miningSkillsCards: [3, 4],
            activeSkills: [3, 4]
        }
    },
    {
        id: 'bot_1_id',
        level: 1,
        name: 'Bot 1',
        race: 'Robot',
        religion: 'none',
        ideology: 'Balance',
        class: 'Engineer',
        profa1: 'Mechanic',
        profa2: 'Programmer',
        profa3: 'Data Analyst',
        baseStats: {
            hp: 200,
            armor: 5,
            damage: 5,
            attackSpeed: 1,
            blockChance: 60,
            penetrationChance: 25,
            critChance: 40,
            dodgeChance: 30,
            critPower: 150,
            accuracy: 50,
            regenSpeed: 0
        },
        baseIncome: {
            goldPerTap: 0,
            goldPer8Hours: 0,
            commonItemChance: 0,
            rareItemChance: 0,
            epicItemChance: 0,
            legendaryItemChance: 0,
            uniqueItemChance: 0
        },
        img: getHeroImages('bot1'),
        defaultCards: {
            passiveSkills: [5, 6],
            equipment: [5, 6],
            battleCards: [5, 6],
            farmSkills: [5, 6],
            townCards: [5, 6],
            locationCards: [5, 6],
            dungeonCards: [5, 6],
            monsterCards: [5, 6],
            minesGoldCards: [5, 6],
            miningSkillsCards: [5, 6],
            activeSkills: [5, 6]
        }
    }
];

export default heroesConfig;
