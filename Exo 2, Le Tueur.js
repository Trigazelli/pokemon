let samih = {
    name : "Samih",
    pv : 100
}

class Survivant {
    constructor(name, cara) {
        this.name = name;
        this.cara = cara;
    }
    action() {
        let chance = Math.random();
        if (chance <= 0.3) {
            // le survivant meurt
            return 0;
        } else if (chance <= 0.5) {
            // le survivant esquive et inflige 10 dégâts
            return 1;
        } else {
            // le survivant meurt mais inflige 15 dégâts
            return 2;
        }
    }
}

let tab_nom = ["Jetstream Sam", "Sébastien-Eudes", "Elon", "Bob", "Okabe", "Sacha", "X Æ A-12"];
let tab_cara = ["lâche", "arrogant", "alcoolique", "héroïque", "collabo", "croyant", "rapide"];
survivant1 = new Survivant(tab_nom.splice(Math.floor(Math.random() * tab_nom.length), 1)[0],tab_cara.splice(Math.floor(Math.random() * tab_cara.length), 1)[0]);
survivant2 = new Survivant(tab_nom.splice(Math.floor(Math.random() * tab_nom.length), 1)[0],tab_cara.splice(Math.floor(Math.random() * tab_cara.length), 1)[0]);
survivant3 = new Survivant(tab_nom.splice(Math.floor(Math.random() * tab_nom.length), 1)[0],tab_cara.splice(Math.floor(Math.random() * tab_cara.length), 1)[0]);
survivant4 = new Survivant(tab_nom.splice(Math.floor(Math.random() * tab_nom.length), 1)[0],tab_cara.splice(Math.floor(Math.random() * tab_cara.length), 1)[0]);
survivant5 = new Survivant(tab_nom.splice(Math.floor(Math.random() * tab_nom.length), 1)[0],tab_cara.splice(Math.floor(Math.random() * tab_cara.length), 1)[0]);
let survivants_restants = [survivant1, survivant2, survivant3, survivant4, survivant5];
let morts = [];

console.log("voici les survivants :")
for (let i = 0; i < survivants_restants.length; i++) {
    console.log(survivants_restants[i].name + ", " + survivants_restants[i].cara)
}


while (samih.pv > 0 && survivants_restants.length > 0) {
    let index = Math.floor(Math.random() * survivants_restants.length);
    let survivant_choisi = survivants_restants[index];
    console.log("Samih attaque " + survivant_choisi.name + " !");
    let mouvement = survivant_choisi.action();
    if (mouvement == 0) {
        console.log("Samih a tué " + survivant_choisi.name + "...");
        morts.push(survivants_restants.splice(index,1)[0].name);
    } else if (mouvement == 1) {
        console.log("Samih a pris 10 dégâts et n'a pas tué " + survivant_choisi.name + ".");
        samih.pv = samih.pv - 10;
    } else {
        console.log("Samih a pris 15 dégâts mais a tué " + survivant_choisi.name + ".");    
        morts.push(survivants_restants.splice(index,1)[0].name);
        samih.pv = samih.pv - 15;
    }
    console.log("il reste " + survivants_restants.length + " survivants et Samih a encore " + Math.max(0,samih.pv) + " pv.");
}

if (survivants_restants.length <= 0) {
    console.log("Samih a éradiqué tous les survivants, il a donc gagné !");
} else if (survivants_restants.length == 5){
    console.log("Les survivants ont tué Samih et personne n'est mort!");
} else {
    morts = morts.join(", ");
    console.log("Les survivants ont tué Samih mais " + morts + " sont morts...");
}