// BattleSystem.js
class BattleSystem {
    constructor(player1, player2, isPvP = true) {
        this.player1 = player1;
        this.player2 = player2;
        this.isPvP = isPvP;
        this.currentTurn = 1;
    }

    attack(attacker, defender) {
        let result = {
            hit: false,
            crit: false,
            damage: 0,
            blocked: false,
            evaded: false
        };

        // Влучання
        if (Math.random() * (attacker.currentStats.accuracy + defender.currentStats.evasion) > defender.currentStats.evasion) {
            result.hit = true;

            // Блокування
            if (Math.random() * 10 <= defender.currentStats.block) {
                result.blocked = true;
                // Пробиття блоку
                if (Math.random() * 10 < attacker.currentStats.penetration) {
                    result.blocked = false;
                }
            }

            if (!result.blocked) {
                // Критичний удар
                if (Math.random() * 10 < attacker.currentStats.crit) {
                    result.crit = true;
                    result.damage = attacker.currentStats.damage * attacker.currentStats.critPower;
                } else {
                    result.damage = attacker.currentStats.damage;
                }

                defender.currentStats.hp -= result.damage;
            }
        } else {
            result.evaded = true;
        }

        return result;
    }

    nextTurn() {
        this.currentTurn = this.currentTurn === 1 ? 2 : 1;
    }

    getCurrentPlayer() {
        return this.currentTurn === 1 ? this.player1 : this.player2;
    }

    getOpponentPlayer() {
        return this.currentTurn === 1 ? this.player2 : this.player1;
    }
}

export default BattleSystem;
