import hero1FullImage from '../assets/images/Heroes/hero1_full.png';
import hero1Avatar from '../assets/images/Heroes/hero1_avatar.png';
import hero2FullImage from '../assets/images/Heroes/hero2_full.png';
import hero2Avatar from '../assets/images/Heroes/hero2_avatar.png';
import botFullImage from '../assets/images/Heroes/bot_full.png';
import botAvatar from '../assets/images/Heroes/bot_avatar.png';

const heroesConfig = [
    {
        id: 'hero_1_id',
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
            goldPer8Hours: 80,  // Додано новий параметр
            commonItemChance: 10,
            rareItemChance: 5,
            epicItemChance: 1,
            legendaryItemChance: 0.5,
            uniqueItemChance: 0.1
        },
        img: {
            full: hero1FullImage,
            avatar: hero1Avatar
        },
        level: 1,
        defaultPassiveSkills: [1, 2],
        defaultEquipment: [1, 2],
        defaultBattleCards: [1, 2],
        defaultFarmSkills: [1, 2],
        townCards: [1, 2],
        locationCards: [1, 2],
        dungeonCards: [1, 2],
        monsterCards: [1, 2],
        minesGoldCards: [1, 2, 3, 4, 5, 6],
        miningSkillsCards: [1, 2],
        heroFarmSkillsCards: [1, 2],
        heroBattleCards: [1, 2],
        heroPassiveSkillsCards: [1, 2],
        heroEquipmentCards: [1, 2],
        activeSkills: [1, 2]  // Додано активні уміння
    },
    {
        id: 'hero_2_id',
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
            goldPer8Hours: 120,  // Додано новий параметр
            commonItemChance: 15,
            rareItemChance: 7,
            epicItemChance: 2,
            legendaryItemChance: 1,
            uniqueItemChance: 0.2
        },
        img: {
            full: hero2FullImage,
            avatar: hero2Avatar
        },
        level: 1,
        defaultPassiveSkills: [3, 4],
        defaultEquipment: [3, 4],
        defaultBattleCards: [3, 4],
        defaultFarmSkills: [3, 4],
        townCards: [3, 4],
        locationCards: [3, 4],
        dungeonCards: [3, 4],
        monsterCards: [3, 4],
        minesGoldCards: [3, 4],
        miningSkillsCards: [3, 4],
        heroFarmSkillsCards: [3, 4],
        heroBattleCards: [3, 4],
        heroPassiveSkillsCards: [3, 4],
        heroEquipmentCards: [3, 4],
        activeSkills: [3, 4]  // Додано активні уміння
    },
    {
        id: 'bot_1_id',
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
            goldPer8Hours: 0,  // Додано новий параметр
            commonItemChance: 0,
            rareItemChance: 0,
            epicItemChance: 0,
            legendaryItemChance: 0,
            uniqueItemChance: 0
        },
        img: {
            full: botFullImage,
            avatar: botAvatar
        },
        level: 1,
        defaultPassiveSkills: [],
        defaultEquipment: [],
        defaultBattleCards: [],
        defaultFarmSkills: [],
        townCards: [],
        locationCards: [],
        dungeonCards: [],
        monsterCards: [],
        minesGoldCards: [],
        miningSkillsCards: [],
        heroFarmSkillsCards: [],
        heroBattleCards: [],
        heroPassiveSkillsCards: [],
        heroEquipmentCards: [],
        activeSkills: []
    }
];

export default heroesConfig;
