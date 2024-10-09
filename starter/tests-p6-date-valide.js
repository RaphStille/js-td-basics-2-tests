let year = parseInt(prompt("Quelle année?"));
let month = parseInt(prompt("Quel mois?"));
let day = parseInt(prompt("Quel jour?"));
let maxDays = 31;

if (month === 4 || month === 6 || month === 9 || month === 11) {
    maxDays = 30;
} else if (month === 2) {
    maxDays = 28;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        maxDays = 29;
    }
}

if (year && month && day) {
    if (day > 0 && month > 0 && year > 0) {
        if (month <= 12) {
            if (day <= maxDays) {
                console.log(`${day}/${month}/${year} est une date valide.`);
            } else {
                console.log("Jour superieur au nombre du jour dans le mois");
            }
        } else {
            console.log("Mois superieur à 12");
        }
    } else {
        console.log("Jour, mois & année doivent etre un nombre positif");
    }
} else {
    console.log("Entrez un NOMBRE svp.");
}