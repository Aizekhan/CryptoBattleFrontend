import { getHeroImages } from './heroImages';

const userProgress = {
    userId: 'user_1_id',
    username: 'Player',
    level: 12,
    experience: 6000,
    balance: 700,
    totalIncomePer8Hours: 300,
    totalTapIncome: 50,
    currentHeroId: 'hero_1_id',
    heroes: [
        {
            id: 'hero_1_id',
            level: 0,
            experience: 1500,
            UpgradeCost: 150,
            UpgradeScale: 1.2,
            name: 'Hero 1',
            race: 'Human',
            religion: 'none',
            ideology: 'Techno',
            class: 'Warrior',
            profa1: 'Blacksmith',
            profa2: 'Miner',
            profa3: 'Warrior Trainer',
            baseStats: {
                hp: 110,
                armor: 6,
                damage: 6,
                attackSpeed: 1.1,
                blockChance: 52,
                penetrationChance: 52,
                critChance: 52,
                dodgeChance: 52,
                critPower: 152,
                accuracy: 92,
                regenSpeed: 6
            },
            baseIncome: {
                goldPerTap: 12,
                goldPer8Hours: 90,
                commonItemChance: 11,
                rareItemChance: 6,
                epicItemChance: 2,
                legendaryItemChance: 0.6,
                uniqueItemChance: 0.2
            },
            img: getHeroImages('hero1'),
            passiveSkills: [
                { id: 1, level: 0 },
                { id: 2, level: 0 }
            ],
            equipment: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            battleCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            farmSkills: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            townCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            locationCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            dungeonCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            monsterCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            minesGoldCards: [
                { id: 1, level: 0 },
                { id: 2, level: 0 },
                { id: 3, level: 0 },
                { id: 4, level: 0 },
                { id: 5, level: 0 },
                { id: 6, level: 0 },
                { id: 7, level: 0 },
                { id: 8, level: 0 }
            ],
            miningSkillsCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            activeSkills: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ]
        },
        {
            id: 'hero_2_id',
            level: 4,
            experience: 900,
            UpgradeCost: 150,
            UpgradeScale: 1.2,
            name: 'Hero 2',
            race: 'Orc',
            religion: 'none',
            ideology: 'Nature',
            class: 'Shaman',
            profa1: 'Herbalist',
            profa2: 'Hunter',
            profa3: 'Beastmaster',
            baseStats: {
                hp: 160,
                armor: 16,
                damage: 21,
                attackSpeed: 1.1,
                blockChance: 12,
                penetrationChance: 12,
                critChance: 12,
                dodgeChance: 12,
                critPower: 177,
                accuracy: 87,
                regenSpeed: 8
            },
            baseIncome: {
                goldPerTap: 16,
                goldPer8Hours: 130,
                commonItemChance: 16,
                rareItemChance: 8,
                epicItemChance: 3,
                legendaryItemChance: 1.2,
                uniqueItemChance: 0.3
            },
            img: getHeroImages('hero2'),
            passiveSkills: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            equipment: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            battleCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            farmSkills: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            townCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            locationCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            dungeonCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            monsterCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            minesGoldCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            miningSkillsCards: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ],
            activeSkills: [
                { id: 3, level: 1 },
                { id: 4, level: 2 }
            ]
        },
        // ²íø³ ãåðî¿
    ]
};

export default userProgress;
