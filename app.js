class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(opponent) {
        let chance = Math.random();
        /*console.log("chance :" + chance)*/
        if (chance < this.luck) {
            console.log(this.name + " attaque !")
            return this.attackPokemon(opponent);
        }
        else {
            console.log(this.name + " a raté ! Il n'attaque pas ce tour !");
            return 0;
        }
    }

    attackPokemon(opponent) {
        /*console.log(this.attack, opponent.defense)*/
        let temp_damage = this.attack - opponent.defense;
        console.log(this.name + " a fait " + temp_damage + " dégâts !");
        return temp_damage;
    }

}

nidoking = new Pokemon("Nidoking", 95, 77, 81, 0.7);
pharamp = new Pokemon("Pharamp", 90, 85, 90, 0.7);


/*let test = nidoking.isLucky(pharamp)
console.log(test)*/

while (true) { // pharamp.hp > 0 || nidoking.hp > 0
    let damage = nidoking.isLucky(pharamp);
    /*console.log("dégâts de nidoking " + damage)
    console.log("Nidoking attaque ! " + damage + " dégâts infligés !");*/
    pharamp.hp = pharamp.hp - damage;
    console.log("Il reste à Pharamp " + Math.max(0, pharamp.hp) + " points de vie !");
    if (pharamp.hp <= 0) {
        console.log("Pharamp a perdu !")
        break;
    }
    damage = pharamp.isLucky(nidoking);
    /*console.log("dégâts de pharamp " + damage)
    console.log("Pharamp attaque ! " + damage + " dégâts infligés !");*/
    nidoking.hp = nidoking.hp - damage;
    console.log("Il reste à Nidoking " + Math.max(0, nidoking.hp) + " points de vie !");
    if (nidoking.hp <= 0) {
        console.log("Nidoking a perdu !")
        break;
    }
}


/*console.log("nido" + nidoking.hp)
console.log("pharamp" + pharamp.hp)
console.log("hors du while")*/