/**
 * Descrizione
 Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
 I numeri non possono essere duplicati
 In seguito deve chiedere all'utente
 di inserire un numero alla volta, sempre compreso tra 1 e 100.
 L'utente non può inserire più volte lo stesso numero.
 Se il numero è presente nella lista dei numeri generati (bombe), 
 la partita termina, altrimenti si continua 
 chiedendo all'utente un altro numero.
 La partita termina quando il giocatore 
 inserisce un numero "vietato" o raggiunge il numero massimo 
 possibile di numeri consentiti.
 Al termine della partita il software 
 deve comunicare il punteggio, cioè il numero di volte
 che l'utente ha inserito un numero consentito.
 */

// Dichiaro le variabili

// Setup
var numeroMax = 0;
var possibilità = 0;  // 100 - 16

// Genera bombe computer e num consentiti
var listaBombe = [];  // numeri vietati (bombe)
var numeriConsentiti = [];  // numeri consentiti inseriti dall'utente
var utente = 0;  // scelta numero utente

// Scelta livello
var livello = parseInt(prompt('Inserici la difficoltà da 0 a 2').trim());
while (livello < 0 || livello > 2 || isNaN(livello)) {
        utente = parseInt(prompt('Il numero di difficoltà deve essere tra 0 e 2').trim());
}
    
switch (livello) {
    case 0:
        numeroMax = 100;
        possibilità = 84;
        break;
    case 1:
        numeroMax = 80;
        possibilità = 64;
        break;
    case 2:
        numeroMax = 50;
        possibilità = 34;
}


// Bombe: 16 numeri random univoci
while (listaBombe.length < 16) {
    // ottenere numero random
    var numeroBomba = numeroRandom(numeroMax);

    // push solo se non già presente
    if (listaBombe.includes(numeroBomba) === false) {
        listaBombe.push(numeroBomba);
     }
}
// Debug numeri bombe
console.log('Lista bombe:', listaBombe);


/**
 * MAIN LOOP
 * 
 * Loop principale del gioco
 */

// Domanda all'utente
while ((numeriConsentiti.lenght < possibilità) && (listaBombe.includes(utente) !== true )) {
     // Scelta utente
    utente = parseInt(prompt('Inserisci un numero da 1 a ' + numeroMax).trim());
    while (utente < 1 || utente > numeroMax || isNaN(utente)) {
        utente = parseInt(prompt('Valore non valido. Inserisci un numero da 1 a ' + numeroMax).trim());
    }
    console.log('Scelta utente:', utente);

    // Controllo numero immesso
    controlloNumero(utente);

    // Raffronto possibilità
    if (numeriConsentiti.length === possibilità) {
        alert('Hai vinto!');
    }
}

console.log('---GAME OVER---');
console.log('Lista numeri validi inseriti:', numeriConsentiti);
console.log('Tentativi riusciti:', numeriConsentiti.length);


/**
 * FUNCTIONS
 */

// Generazione numeri random 
function numeroRandom(max) { 
    return Math.floor(Math.random() * max) + 1;
}

// Controllo numero utente 
function controlloNumero(numero) {
    // Se n è presente nella lista bombe
    if (listaBombe.includes(numero) === true) {
        alert('Hai perso :( Hai provato con successo' +
            numeriConsentiti.length +
            ' volte prima di trovare la bomba');
    }
    // Se n è gia stato inserito in precedenza
    else if (numeriConsentiti.includes(numero) === true) {
        alert('Numero già inserito, inserirne un altro');
     }
    // Se n non è stato inserito
    else if (numeriConsentiti.includes(numero) === false) {
        numeriConsentiti.push(numero);
     }
}
