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

// Genera bombe computer
var computerBombe = [];
var bombePc = 16;

// per non far duplicare i numeri nell'array, utilizzo un while
while (computerBombe.length < bombePc) {
    var number = getRandomNumber(1, 100);

    if (! computerBombe.includes(number)) {
        computerBombe.push(number);
     }
}

console.log(computerBombe);


// Genera numeri random con range
function getRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Domanda all'utente
var number = parseInt(prompt('Inserisci un numero compreso tra 1 e 100').trim());

var counter = 0;
while (counter === computerBombe.lenght) {
   
    number = parseInt(prompt('Numero non presente in lista, inserisci un nuovo numero'));

    counter++;
}

console.log('Numero presente in lista, hai perso');
 



