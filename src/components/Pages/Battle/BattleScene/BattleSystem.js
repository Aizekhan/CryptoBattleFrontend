class BattleSystem {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.timer1 = null;
        this.timer2 = null;
    }

    calculateAttackInterval(attackSpeed) {
        return 3000 / attackSpeed;
    }

    attack(attacker, defender) {
        let result = {
            hit: false,
            crit: false,
            damage: 0,
            blocked: false,
            evaded: false
        };

        if (Math.random() * (attacker.currentStats.accuracy + defender.currentStats.evasion) > defender.currentStats.evasion) {
            result.hit = true;

            if (Math.random() * 10 <= defender.currentStats.block) {
                result.blocked = true;
                if (Math.random() * 10 < attacker.currentStats.penetration) {
                    result.blocked = false;
                }
            }

            if (!result.blocked) {
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

    startBattle(callback) {
        const attackInterval1 = this.calculateAttackInterval(this.player1.currentStats.attackSpeed);
        const attackInterval2 = this.calculateAttackInterval(this.player2.currentStats.attackSpeed);

        this.timer1 = setInterval(() => {
            const result = this.attack(this.player1, this.player2);
            callback(this.player1, this.player2, result);
            if (this.player2.currentStats.hp <= 0) {
                this.endBattle();
                callback(this.player1, this.player2, result, true); // true означає, що бій закінчився
            }
        }, attackInterval1);

        this.timer2 = setInterval(() => {
            const result = this.attack(this.player2, this.player1);
            callback(this.player2, this.player1, result);
            if (this.player1.currentStats.hp <= 0) {
                this.endBattle();
                callback(this.player2, this.player1, result, true); // true означає, що бій закінчився
            }
        }, attackInterval2);
    }

    endBattle() {
        clearInterval(this.timer1);
        clearInterval(this.timer2);
    }
}

export default BattleSystem;
