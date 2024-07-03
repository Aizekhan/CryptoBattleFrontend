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
        defaultFarmSkills: [1, 2]
    },
    {
        id: 'hero_2_id',
        name: 'Hero 2',
        race: 'Orc',
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
        defaultFarmSkills: [3, 4]
    },
    {
        id: 'bot_1_id',
        name: 'Bot 1',
        race: 'Robot',
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
        defaultFarmSkills: []
    }
];

export default heroesConfig;
