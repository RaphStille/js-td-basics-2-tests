/*
TESTS - PRÉPA 6 : Date valide

Écrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas.

AIDE (en français) :
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.

Étapes :
1. Demandez à l'utilisateur d'entrer une date sous forme de jour, mois et année, puis stockez ces valeurs dans des variables (par exemple, day, month, year).
2. Initialisez une variable maxDays pour stocker le nombre maximum de jours autorisés pour le mois.
3. Utilisez une série de conditions pour déterminer maxDays en fonction du mois (y compris le cas de février avec gestion bissextile).
4. Utilisez une autre condition pour vérifier si la date est valide en comparant le jour entré par l'utilisateur avec maxDays.
5. Affichez dans la console si la date est valide ou non : "La date … est valide" ou "La date … n'est PAS valide".

1* Demandez année, mois et jours et les stocker
2* testez si ce sont des nombres et s'ils sont positifs
3* Verifiez que le nombre de jour entré ne depasse pas 30 ou 31 (28 pour février et 29 février bissextile) selon le mois
4* verifiez la validité de la date
5* Notifiez dans la console si elle l'est ou pas
*/

let year = prompt("Quelle année?")
let month = prompt("Quel mois?")
let day = prompt("Quel jour?")

let isBissextile = false;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isBissextile = true;
}

let maxDays = 31;

if (month === "04" ||month === "06" ||month === "09" ||month === "11") {
    maxDays = 30;
}
if (month === "02") {
    maxDays = 28;
}
if (month === "02" && isBissextile === true) {
    maxDays = 29;
} else {
    console.log("Erreur dans le mois");
}

if (day < maxDays) {
    if (month <= 12) {
        console.log(`${day}/${month}/${year} est une date valide avec un mois en ${maxDays}jours`);
    }
} else {
    console.log(`Le nombre de jour que vous avez cité n'existe pas dans le mois`);
}


