// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const iViking = Math.floor(Math.random() * this.vikingArmy.length);
        const iSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingStrength = this.vikingArmy[iViking].strength;
        const result = this.saxonArmy[iSaxon].receiveDamage(vikingStrength);

        if (this.saxonArmy[iSaxon].health <= 0) {
            this.saxonArmy.splice(iSaxon, 1);
        }
        return result;
    }
    saxonAttack() {
        const iSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const iViking = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonStrength = this.saxonArmy[iSaxon].strength;
        const result = this.vikingArmy[iViking].receiveDamage(saxonStrength);

        if (this.vikingArmy[iViking].health <= 0) {
            this.vikingArmy.splice(iViking, 1);
        }
        return result;
    }
    showStatus () {
        
    }
}

