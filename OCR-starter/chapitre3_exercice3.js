// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.

let heures = 20 ;
let minutes = 12;
let secondes = 50;

if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)) {
    secondes++;
    if (secondes === 60) {
        secondes = 0;
        minutes++;
            if (minutes === 60) {
                minutes = 0;
                heures++;
                    if (heures === 24) {
                        heures = 0;
                    }
            }
    }
    console.log(`Dans une seconde il sera ${heures}:${minutes}:${secondes}`);
} else {
    console.log("Erreur.")
}