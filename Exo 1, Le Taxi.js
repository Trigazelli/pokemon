let john = {
    name : "John",
    sante_mentale : 10
}

let musique = ["Anissa de Wejdene", "The storm de Skarblown", "The veil of night de Tomohito Nishiura", "Undefeatable de Kellin Quinn", "Canard coin coin de Hubert Lavoinon"];
let feux_rouges = 30;
let = musique_jouee = "";
console.log("Le trajet commence... J'espère ne pas tomber sur Anissa de wejdene. Il y a " + feux_rouges + " feux rouges.");
while (feux_rouges > 0 && john.sante_mentale > 0) {
    musique_jouee = musique[Math.floor(Math.random() * 5)];
    if (musique_jouee == "Anissa de Wejdene") {
        john.sante_mentale = john.sante_mentale - 1;
        console.log("AH NON PAS ENCORE ANISSA ! JE CHANGE DE TAXI !", "\n", "Il ne reste à John que " + john.sante_mentale + " de santé mentale.");
    } else {
        console.log("Ouf, j'y ai échappé, la musique jouée est " + musique_jouee + ".");
    }
    feux_rouges--;
    console.log("Il reste " + feux_rouges + " feux rouges !");
}

if (john.sante_mentale <= 0) {
    console.log("Oh non ! John a explosé ! Le taxi est couvert de sang...");
} else {
    console.log("Youpi ! John est arrivé sans encombre, il lui reste encore " + john.sante_mentale + " de santé mentale !", "\n", "Il a dû pour cela changer " + (10 - john.sante_mentale) + " fois de taxi.");
}