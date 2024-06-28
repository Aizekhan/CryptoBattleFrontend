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

// Додайте інші імпорти картинок для інших категорій карт

export const passiveSkills = [
    { id: 1, name: 'Increase HP', effect: '+5 HP', level: 0, upgradeCost: 100, img: passiveSkill1, tag: 'heroStat', prerequisites: [] },
    { id: 2, name: 'Increase Armor', effect: '+5% Armor', level: 0, upgradeCost: 150, img: passiveSkill2, tag: 'heroStat', prerequisites: [{ id: 1, level: 1 }] },
    { id: 3, name: 'Increase Damage', effect: '+1 Damage', level: 0, upgradeCost: 200, img: passiveSkill3, tag: 'heroStat', prerequisites: [{ id: 2, level: 2 }] },
    { id: 4, name: 'Increase Attack Speed', effect: '+5% Attack Speed', level: 0, upgradeCost: 250, img: passiveSkill4, tag: 'heroStat', prerequisites: [{ id: 3, level: 3 }] },
    { id: 5, name: 'Increase Block Chance', effect: '+5% Block Chance', level: 0, upgradeCost: 300, img: passiveSkill5, tag: 'heroStat', prerequisites: [{ id: 4, level: 4 }] },
    { id: 6, name: 'Increase Penetration Chance', effect: '+5% Penetration Chance', level: 0, upgradeCost: 350, img: passiveSkill6, tag: 'heroStat', prerequisites: [{ id: 5, level: 5 }] },
    { id: 7, name: 'Increase Crit Chance', effect: '+5% Crit Chance', level: 0, upgradeCost: 400, img: passiveSkill7, tag: 'heroStat', prerequisites: [{ id: 6, level: 6 }] },
    { id: 8, name: 'Increase Dodge Chance', effect: '+5% Dodge Chance', level: 0, upgradeCost: 450, img: passiveSkill8, tag: 'heroStat', prerequisites: [{ id: 7, level: 7 }] },
    { id: 9, name: 'Increase Crit Power', effect: '+5% Crit Power', level: 0, upgradeCost: 500, img: passiveSkill9, tag: 'heroStat', prerequisites: [{ id: 8, level: 8 }] },
    { id: 10, name: 'Increase Accuracy', effect: '+5% Accuracy', level: 0, upgradeCost: 550, img: passiveSkill10, tag: 'heroStat', prerequisites: [{ id: 9, level: 9 }] },
];

export const miningSkills = [
    { id: 1, name: 'Increased Mining Income', effect: 'Increase income from mines by 10', level: 0, upgradeCost: 100, img: miningSkill1, tag: 'miningSkill', prerequisites: [] },
    { id: 2, name: 'Loot Chance', effect: 'Increase loot chance by 1%', level: 0, upgradeCost: 150, img: miningSkill2, tag: 'miningSkill', prerequisites: [{ id: 1, level: 1 }] },
    { id: 3, name: 'Double Income Chance', effect: 'Chance to earn double income per hour', level: 0, upgradeCost: 200, img: miningSkill3, tag: 'miningSkill', prerequisites: [{ id: 2, level: 2 }] },
];

export const equipmentCards = [
    { id: 1, name: 'Simple Sword', effect: '+1 Damage', level: 0, upgradeCost: 100, img: equipment1, tag: 'equip', prerequisites: [] },
    { id: 2, name: 'Basic Armor', effect: '+5 HP', level: 0, upgradeCost: 150, img: equipment2, tag: 'equip', prerequisites: [{ id: 1, level: 1 }] },
    { id: 3, name: 'Simple Cloak', effect: '+5% Dodge Chance', level: 0, upgradeCost: 200, img: equipment3, tag: 'equip', prerequisites: [{ id: 2, level: 2 }] },
];

export const battleCards = [
    { id: 1, name: 'Battle Sword', effect: '+5% Crit Chance', level: 0, upgradeCost: 100, img: battleCard1, tag: 'battleCard', prerequisites: [] },
    { id: 2, name: 'Battle Armor', effect: '+5% Armor', level: 0, upgradeCost: 150, img: battleCard2, tag: 'battleCard', prerequisites: [{ id: 1, level: 1 }] },
    { id: 3, name: 'Battle Cloak', effect: '+5% Dodge Chance', level: 0, upgradeCost: 200, img: battleCard3, tag: 'battleCard', prerequisites: [{ id: 2, level: 2 }] },
    { id: 4, name: 'Battle Axe', effect: '+5% Crit Power', level: 0, upgradeCost: 250, img: battleCard4, tag: 'battleCard', prerequisites: [{ id: 3, level: 3 }] },
];

export const farmSkills = [
    { id: 1, name: 'Loot Chance', effect: 'Increase loot chance by 1%', level: 0, upgradeCost: 100, img: farmSkill1, tag: 'farmSkill', prerequisites: [] },
    { id: 2, name: 'Double Tap Income', effect: 'Chance to earn double income per tap', level: 0, upgradeCost: 150, img: farmSkill2, tag: 'farmSkill', prerequisites: [{ id: 1, level: 1 }] },
    { id: 3, name: 'Tap Damage', effect: '+1 Damage per tap', level: 0, upgradeCost: 200, img: farmSkill3, tag: 'farmSkill', prerequisites: [{ id: 2, level: 2 }] },
];

export const heroCards = [
    { id: 1, name: 'Hero 1', effect: 'Basic Hero', level: 1, upgradeCost: 100, img: heroCard1, tag: 'hero', prerequisites: [] },
    { id: 2, name: 'Hero 2', effect: 'Basic Hero', level: 1, upgradeCost: 150, img: heroCard2, tag: 'hero', prerequisites: [{ id: 1, level: 1 }] },
    { id: 3, name: 'Hero 3', effect: 'Basic Hero', level: 1, upgradeCost: 200, img: heroCard3, tag: 'hero', prerequisites: [{ id: 2, level: 2 }] },
];

export const minesCards = [
    { id: 1, name: 'Gold Mine 1', level: 0, effect: 'Produces gold', img: mine1, prerequisites: [], upgradeCost: 100, tag: 'mine' },
    { id: 2, name: 'Gold Mine 2', level: 0, effect: 'Produces more gold', img: mine2, prerequisites: [{ id: 1, level: 3 }], upgradeCost: 200, tag: 'mine' },
    { id: 3, name: 'Gold Mine 3', level: 0, effect: 'Produces even more gold', img: mine3, prerequisites: [{ id: 2, level: 3 }], upgradeCost: 300, tag: 'mine' },
    { id: 4, name: 'Resource Mine 1', level: 0, effect: 'Produces resources', img: mine4, prerequisites: [], upgradeCost: 150, tag: 'mine' },
    { id: 5, name: 'Resource Mine 2', level: 0, effect: 'Produces more resources', img: mine5, prerequisites: [{ id: 4, level: 3 }], upgradeCost: 250, tag: 'mine' },
    { id: 6, name: 'Resource Mine 3', level: 0, effect: 'Produces even more resources', img: mine6, prerequisites: [{ id: 5, level: 3 }], upgradeCost: 350, tag: 'mine' },
    { id: 7, name: 'Crystal Mine 1', level: 0, effect: 'Produces crystals', img: mine7, prerequisites: [], upgradeCost: 400, tag: 'mine' },
    { id: 8, name: 'Crystal Mine 2', level: 0, effect: 'Produces more crystals', img: mine8, prerequisites: [{ id: 7, level: 3 }], upgradeCost: 450, tag: 'mine' },
    { id: 9, name: 'Crystal Mine 3', level: 0, effect: 'Produces even more crystals', img: mine9, prerequisites: [{ id: 8, level: 3 }, { id: 7, level: 5 }], upgradeCost: 500, tag: 'mine' },
];
