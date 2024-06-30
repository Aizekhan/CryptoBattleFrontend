// Player.js
class Player {
    constructor(id, name, baseStats, equipment = []) {
        this.id = id;
        this.name = name;
        this.baseStats = baseStats;
        this.currentStats = { ...baseStats };
        this.equipment = equipment;
        this.currentTactic = 'normal'; // Додано поле для поточної тактики
    }

    updateStats() {
        // Оновлення поточних характеристик на основі обладнання та тактик
        this.currentStats = { ...this.baseStats };
        this.equipment.forEach(equip => {
            // Логіка для врахування обладнання
        });
        switch (this.currentTactic) {
            case 'aggressive':
                this.currentStats.damage *= 1.2;
                this.currentStats.armor *= 0.8;
                break;
            case 'defensive':
                this.currentStats.damage *= 0.8;
                this.currentStats.armor *= 1.2;
                break;
            default:
                break;
        }
    }

    changeTactic(tactic) {
        this.currentTactic = tactic;
        this.updateStats();
    }
}

export default Player;
