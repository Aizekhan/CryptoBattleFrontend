import passiveSkillBackground from '../../assets/images/Backgrounds/mining-skill-bg.png';
import goldMineBackground from '../../assets/images/Backgrounds/mining-skill-bg.png';
import heroStatBackground from '../../assets/images/Backgrounds/mining-skill-bg.png';
import equipBackground from '../../assets/images/Backgrounds/battle-card-bg.png';
import battleCardBackground from '../../assets/images/Backgrounds/battle-card-bg.png';
import farmSkillBackground from '../../assets/images/Backgrounds/mining-skill-bg.png';
import locationBackground from '../../assets/images/Backgrounds/mining-skill-bg.png';
import marketBackground from '../../assets/images/Backgrounds/mining-skill-bg.png';
import miningSkillBackground from '../../assets/images/Backgrounds/mining-skill-bg.png';

import activeSkill1 from '../../assets/images/ActiveSkillsImages/active1.png';
import activeSkill2 from '../../assets/images/ActiveSkillsImages/active2.png';
import activeSkill3 from '../../assets/images/ActiveSkillsImages/active3.png';

import passiveSkill1 from '../../assets/images/PassiveSkillsImages/passive1.png';
import passiveSkill2 from '../../assets/images/PassiveSkillsImages/passive2.png';
import passiveSkill3 from '../../assets/images/PassiveSkillsImages/passive3.png';
import passiveSkill4 from '../../assets/images/PassiveSkillsImages/passive4.png';
import passiveSkill5 from '../../assets/images/PassiveSkillsImages/passive5.png';
import passiveSkill6 from '../../assets/images/PassiveSkillsImages/passive6.png';
import passiveSkill7 from '../../assets/images/PassiveSkillsImages/passive7.png';
import passiveSkill8 from '../../assets/images/PassiveSkillsImages/passive8.png';
import passiveSkill9 from '../../assets/images/PassiveSkillsImages/passive9.png';
import passiveSkill10 from '../../assets/images/PassiveSkillsImages/passive10.png';
import miningSkill1 from '../../assets/images/MiningSkillsImages/mining1.png';
import miningSkill2 from '../../assets/images/MiningSkillsImages/mining2.png';
import miningSkill3 from '../../assets/images/MiningSkillsImages/mining3.png';
import equipment1 from '../../assets/images/EquipmentCardsImages/equipment1.png';
import equipment2 from '../../assets/images/EquipmentCardsImages/equipment2.png';
import equipment3 from '../../assets/images/EquipmentCardsImages/equipment3.png';
import battleCard1 from '../../assets/images/BattleCardsImages/battle1.png';
import battleCard2 from '../../assets/images/BattleCardsImages/battle2.png';
import battleCard3 from '../../assets/images/BattleCardsImages/battle3.png';
import battleCard4 from '../../assets/images/BattleCardsImages/battle4.png';
import farmSkill1 from '../../assets/images/FarmSkillsImages/farm1.png';
import farmSkill2 from '../../assets/images/FarmSkillsImages/farm2.png';
import farmSkill3 from '../../assets/images/FarmSkillsImages/farm3.png';
import heroCard1 from '../../assets/images/HeroesCardsImages/hero1.png';
import heroCard2 from '../../assets/images/HeroesCardsImages/hero2.png';
import heroCard3 from '../../assets/images/HeroesCardsImages/hero3.png';
import mine1 from '../../assets/images/MinesPageImages/1.png';
import mine2 from '../../assets/images/MinesPageImages/2.png';
import mine3 from '../../assets/images/MinesPageImages/3.png';
import mine4 from '../../assets/images/MinesPageImages/4.png';
import mine5 from '../../assets/images/MinesPageImages/5.png';
import mine6 from '../../assets/images/MinesPageImages/6.png';
import mine7 from '../../assets/images/MinesPageImages/7.png';
import mine8 from '../../assets/images/MinesPageImages/8.png';
import mine9 from '../../assets/images/MinesPageImages/9.png';

import marketHeroOrc from '../../assets/images/MarketImages/hero_orc.png';
import marketHeroTroll from '../../assets/images/MarketImages/hero_troll.png';
import marketHeroDarkElf from '../../assets/images/MarketImages/hero_dark_elf.png';
import locationCastle from '../../assets/images/LocationImages/castle.png';
import locationSwamp from '../../assets/images/LocationImages/swamp.png';
import locationForest from '../../assets/images/LocationImages/forest.png';

export const cardBackgrounds = {
    goldMine: goldMineBackground,
    heroStat: heroStatBackground,
    equip: equipBackground,
    battleCard: battleCardBackground,
    farmSkill: farmSkillBackground,
    passiveSkill: passiveSkillBackground,
    market: marketBackground,
    location: locationBackground,
    miningSkill: miningSkillBackground,
    town: heroStatBackground,  // Використовуємо існуюче зображення як тимчасове
    dungeon: locationBackground,  // Використовуємо існуюче зображення як тимчасове
    monster: locationBackground   // Використовуємо існуюче зображення як тимчасове
};

export const activeSkills = [
    { id: 1, name: 'Fireball', effect: 'Deals fire damage', level: 0, img: activeSkill1, tag: 'activeSkill', prerequisites: [], effectScale: 1.1 },
    { id: 2, name: 'Heal', effect: 'Restores HP', level: 0, img: activeSkill2, tag: 'activeSkill', prerequisites: [{ id: 1, level: 1 }], effectScale: 1.1 },
    { id: 3, name: 'Shield', effect: 'Increases armor temporarily', level: 0, img: activeSkill3, tag: 'activeSkill', prerequisites: [{ id: 2, level: 2 }], effectScale: 1.1 },
];

export const passiveSkills = [
    { id: 1, name: 'Increase HP', effect: '+5 HP', level: 0, img: passiveSkill1, tag: 'heroStat', prerequisites: [], effectScale: 1.1 },
    { id: 2, name: 'Increase Armor', effect: '+5% Armor', level: 0, img: passiveSkill2, tag: 'heroStat', prerequisites: [{ id: 1, level: 1 }], effectScale: 1.1 },
    { id: 3, name: 'Increase Damage', effect: '+1 Damage', level: 0, img: passiveSkill3, tag: 'heroStat', prerequisites: [{ id: 2, level: 2 }], effectScale: 1.1 },
    { id: 4, name: 'Increase Attack Speed', effect: '+5% Attack Speed', level: 0, img: passiveSkill4, tag: 'heroStat', prerequisites: [{ id: 3, level: 3 }], effectScale: 1.1 },
    { id: 5, name: 'Increase Block Chance', effect: '+5% Block Chance', level: 0, img: passiveSkill5, tag: 'heroStat', prerequisites: [{ id: 4, level: 4 }], effectScale: 1.1 },
    { id: 6, name: 'Increase Penetration Chance', effect: '+5% Penetration Chance', level: 0, img: passiveSkill6, tag: 'heroStat', prerequisites: [{ id: 5, level: 5 }], effectScale: 1.1 },
    { id: 7, name: 'Increase Crit Chance', effect: '+5% Crit Chance', level: 0, img: passiveSkill7, tag: 'heroStat', prerequisites: [{ id: 6, level: 6 }], effectScale: 1.1 },
    { id: 8, name: 'Increase Dodge Chance', effect: '+5% Dodge Chance', level: 0, img: passiveSkill8, tag: 'heroStat', prerequisites: [{ id: 7, level: 7 }], effectScale: 1.1 },
    { id: 9, name: 'Increase Crit Power', effect: '+5% Crit Power', level: 0, img: passiveSkill9, tag: 'heroStat', prerequisites: [{ id: 8, level: 8 }], effectScale: 1.1 },
    { id: 10, name: 'Increase Accuracy', effect: '+5% Accuracy', level: 0, img: passiveSkill10, tag: 'heroStat', prerequisites: [{ id: 9, level: 9 }], effectScale: 1.1 },
];

export const miningSkills = [
    { id: 1, name: 'Increased Mining Income', effect: 'Increase income from mines by 10', level: 0, img: miningSkill1, tag: 'miningSkill', prerequisites: [], effectScale: 1.1 },
    { id: 2, name: 'Loot Chance', effect: 'Increase loot chance by 1%', level: 0, img: miningSkill2, tag: 'miningSkill', prerequisites: [{ id: 1, level: 1 }], effectScale: 1.1 },
    { id: 3, name: 'Double Income Chance', effect: 'Chance to earn double income per hour', level: 0, img: miningSkill3, tag: 'miningSkill', prerequisites: [{ id: 2, level: 2 }], effectScale: 1.1 },
];

export const equipmentCards = [
    { id: 1, name: 'Simple Sword', effect: '+1 Damage', level: 0, img: equipment1, tag: 'equip', prerequisites: [], effectScale: 1.1 },
    { id: 2, name: 'Basic Armor', effect: '+5 HP', level: 0, img: equipment2, tag: 'equip', prerequisites: [{ id: 1, level: 1 }], effectScale: 1.1 },
    { id: 3, name: 'Simple Cloak', effect: '+5% Dodge Chance', level: 0, img: equipment3, tag: 'equip', prerequisites: [{ id: 2, level: 2 }], effectScale: 1.1 },
];

export const battleCards = [
    { id: 1, name: 'Battle Sword', effect: '+5% Crit Chance', level: 0, img: battleCard1, tag: 'battleCard', prerequisites: [], effectScale: 1.1 },
    { id: 2, name: 'Battle Armor', effect: '+5% Armor', level: 0, img: battleCard2, tag: 'battleCard', prerequisites: [{ id: 1, level: 1 }], effectScale: 1.1 },
    { id: 3, name: 'Battle Cloak', effect: '+5% Dodge Chance', level: 0, img: battleCard3, tag: 'battleCard', prerequisites: [{ id: 2, level: 2 }], effectScale: 1.1 },
    { id: 4, name: 'Battle Axe', effect: '+5% Crit Power', level: 0, img: battleCard4, tag: 'battleCard', prerequisites: [{ id: 3, level: 3 }], effectScale: 1.1 },
];

export const farmSkills = [
    { id: 1, name: 'Loot Chance', effect: 'Increase loot chance by 1%', level: 0, img: farmSkill1, tag: 'farmSkill', prerequisites: [], effectScale: 1.1 },
    { id: 2, name: 'Double Tap Income', effect: 'Chance to earn double income per tap', level: 0, img: farmSkill2, tag: 'farmSkill', prerequisites: [{ id: 1, level: 1 }], effectScale: 1.1 },
    { id: 3, name: 'Tap Damage', effect: '+1 Damage per tap', level: 0, img: farmSkill3, tag: 'farmSkill', prerequisites: [{ id: 2, level: 2 }], effectScale: 1.1 },
    { id: 5, name: 'HP Regen', effect: 'Increases HP regeneration rate', level: 0, img: farmSkill3, tag: 'farmSkill', prerequisites: [], effectScale: 1.1, effectType: 'regenSpeed', effectValue: 1 }
];

export const heroCards = [
    { id: 1, name: 'Hero 1', effect: 'Basic Hero', level: 1, img: heroCard1, tag: 'hero', prerequisites: [], effectScale: 1.1 },
    { id: 2, name: 'Hero 2', effect: 'Basic Hero', level: 1, img: heroCard2, tag: 'hero', prerequisites: [{ id: 1, level: 1 }], effectScale: 1.1 },
    { id: 3, name: 'Hero 3', effect: 'Basic Hero', level: 1, img: heroCard3, tag: 'hero', prerequisites: [{ id: 2, level: 2 }], effectScale: 1.1 },
];

export const minesCards = [
    { id: 1, name: 'Gold Mine 1', effect: 'Produces gold', level: 0, img: mine1, prerequisites: [], tag: 'goldMine', effectScale: 1.1, scaleIncome: 1.2, baseIncome: 10 },
    { id: 2, name: 'Gold Mine 2', effect: 'Produces more gold', level: 0, img: mine2, prerequisites: [{ id: 1, level: 3 }], tag: 'goldMine', effectScale: 1.2, scaleIncome: 1.3, baseIncome: 20 },
    { id: 3, name: 'Gold Mine 3', effect: 'Produces even more gold', level: 0, img: mine3, prerequisites: [{ id: 2, level: 3 }], tag: 'goldMine', effectScale: 1.3, scaleIncome: 1.4, baseIncome: 30 },
    { id: 4, name: 'Resource Mine 1', effect: 'Produces resources', level: 0, img: mine4, prerequisites: [], tag: 'goldMine', effectScale: 1.1, scaleIncome: 1.2, baseIncome: 15 },
    { id: 5, name: 'Resource Mine 2', effect: 'Produces more resources', level: 0, img: mine5, prerequisites: [{ id: 4, level: 3 }], tag: 'goldMine', effectScale: 1.2, scaleIncome: 1.3, baseIncome: 30 },
    { id: 6, name: 'Resource Mine 3', effect: 'Produces even more resources', level: 0, img: mine6, prerequisites: [{ id: 5, level: 3 }], tag: 'goldMine', effectScale: 1.3, scaleIncome: 1.4, baseIncome: 45 },
    { id: 7, name: 'Crystal Mine 1', effect: 'Produces crystals', level: 0, img: mine7, prerequisites: [], tag: 'goldMine', effectScale: 1.1, scaleIncome: 1.2, baseIncome: 5 },
    { id: 8, name: 'Crystal Mine 2', effect: 'Produces more crystals', level: 0, img: mine8, prerequisites: [{ id: 7, level: 3 }], tag: 'goldMine', effectScale: 1.2, scaleIncome: 1.3, baseIncome: 10 },
    { id: 9, name: 'Crystal Mine 3', effect: 'Produces even more crystals', level: 0, img: mine9, prerequisites: [{ id: 8, level: 3 }, { id: 7, level: 5 }], tag: 'goldMine', effectScale: 1.3, scaleIncome: 1.4, baseIncome: 15 },
];

export const marketCards = [
    { id: 1, name: 'Hero Orc', effect: 'A strong orc hero', level: 1, img: marketHeroOrc, tag: 'market', prerequisites: [] },
    { id: 2, name: 'Hero Troll', effect: 'A powerful troll hero', level: 1, img: marketHeroTroll, tag: 'market', prerequisites: [{ id: 1, level: 2 }] },
    { id: 3, name: 'Hero Dark Elf', effect: 'A swift dark elf hero', level: 1, img: marketHeroDarkElf, tag: 'market', prerequisites: [{ id: 2, level: 3 }] },
];

export const locationCards = [
    { id: 1, name: 'Ancient Castle', effect: 'A location with ancient secrets', level: 0, img: locationCastle, tag: 'location', prerequisites: [] },
    { id: 2, name: 'Darwood Swamp', effect: 'A mysterious swamp with hidden dangers', level: 0, img: locationSwamp, tag: 'location', prerequisites: [{ id: 1, level: 2 }] },
    { id: 3, name: 'Forest Glade', effect: 'A peaceful glade in the forest', level: 0, img: locationForest, tag: 'location', prerequisites: [{ id: 2, level: 3 }] },
];

export const townCards = [
    { id: 1, name: 'Town Hall', effect: 'Central building of the town', level: 0, img: locationCastle, tag: 'town', prerequisites: [] },
    { id: 2, name: 'Blacksmith', effect: 'Produces weapons and armor', level: 0, img: locationSwamp, tag: 'town', prerequisites: [{ id: 1, level: 2 }] },
    { id: 3, name: 'Marketplace', effect: 'Trading center of the town', level: 0, img: locationForest, tag: 'town', prerequisites: [{ id: 2, level: 3 }] },
];

export const dungeonCards = [
    { id: 1, name: 'Dark Cave', effect: 'A cave filled with dangers', level: 0, img: locationCastle, tag: 'dungeon', prerequisites: [] },
    { id: 2, name: 'Haunted Crypt', effect: 'A crypt with restless spirits', level: 0, img: locationSwamp, tag: 'dungeon', prerequisites: [{ id: 1, level: 2 }] },
    { id: 3, name: 'Lost Tomb', effect: 'An ancient tomb with hidden treasures', level: 0, img: locationForest, tag: 'dungeon', prerequisites: [{ id: 2, level: 3 }] },
];

export const monsterCards = [
    { id: 1, name: 'Goblin', effect: 'A sneaky goblin', level: 0, img: locationCastle, tag: 'monster', prerequisites: [] },
    { id: 2, name: 'Troll', effect: 'A strong and brutal troll', level: 0, img: locationSwamp, tag: 'monster', prerequisites: [{ id: 1, level: 2 }] },
    { id: 3, name: 'Dragon', effect: 'A fearsome dragon', level: 0, img: locationForest, tag: 'monster', prerequisites: [{ id: 2, level: 3 }] },
];

const cardsConfig = [
    ...passiveSkills,
    ...miningSkills,
    ...equipmentCards,
    ...battleCards,
    ...farmSkills,
    ...heroCards,
    ...minesCards,
    ...marketCards,
    ...locationCards,
    ...townCards,
    ...dungeonCards,
    ...monsterCards,
    ...activeSkills
];

export default cardsConfig;
