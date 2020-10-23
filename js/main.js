/**
 * ESERCIZIO CAMPO MINATO
 */

/*Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.*/

// BONUS: (da fare solo se funziona tutto il resto)
//all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 =>  tra 1 e 80
//con difficoltà 2 => tra 1 e 50 

/**
 * IL COMPUTER DEVE GENERARE 16 NUMERI CASUALI TRA 1 E 100. I numeri non possono essere duplicati.
 *
 */


var pcNumber = [];
var pcBomb = 16;

var userNumber = 0;
var gameExit = false;

var checkDigit = false;
var userNumberList = [];

var livelloDiff = '';
var nrCheck = 0;

// Livello di difficoltà

livelloDiff = parseInt( prompt('Inserisci la Difficoltà tra 0 (facile) 1 (media) 2 (difficile)') );

switch (livelloDiff) {
  case 0:
    nrCheck = 100;
    break;
  case 1:
    nrCheck = 80;
    break;
  case 2:
    nrCheck = 50;
    break; 

}

console.log('Difficoltà:',livelloDiff,'range fino a:',nrCheck);

pcNumber = randomNumber(pcNumber,pcBomb);
console.log('Lista delle bombe', pcNumber);

// Funzione per random numbers

function randomNumber (number,list){
  number = [];
  for (var i = 0; i < list; i++){
    random = ( Math.floor( (Math.random() * nrCheck) + 1 ) ) ;
    
    if (number.includes(random) == false) {
      number.push(random);
    } else {
      i--;
    }

  }
  return number;
}

/* Ciclo while */

while (gameExit == false) {

  /* Controllo sul nr utente */

  while (checkDigit == false){
    userNumber = parseInt(prompt('Inserisci un numero da 1 a ' + nrCheck));
    console.log('Hai scelto il numero', userNumber);
    
    if ( (userNumber < 1) || (userNumber > nrCheck) ){
      alert('Attenzione, il numero non è corretto. Ridigita il numero.');
    }

    else if ( userNumberList.includes(userNumber) == true ){
      alert('Numero già inserito');
    } 

    else if ( userNumberList.includes(userNumber) == false ){
      userNumberList.push(userNumber);
      console.log("Storico Inserimenti",userNumberList);
      checkDigit = true;
    }
      
}

  // PARTITA PERSA

if (pcNumber.includes(userNumber) == true){
console.log('*** HAI PERSO *** \n Hai totalizzato: ' + ((userNumberList.length) - 1) + ' punti');
gameExit = true;
} 

    // PARTITA VINTA
    else{

      if(userNumberList.length == (nrCheck - pcNumber.length)){
        console.log('*** HAI VINTO ***');    
        alert('Complimenti, hai totalizzato il massimo dei punti)')
        gameExit = true;
      }

    // VAI AVANTI

        else{
          alert('Mancano altri ' + (( (nrCheck - pcNumber.length) - userNumberList.length)) + ' numeri per vincere, coraggio!')
          checkDigit = false;
        }
    }

}

