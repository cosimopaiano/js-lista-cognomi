// verifica corretto import script
console.log('me js is here');

/**
 * chiedere all’utente il cognome
 * inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
 * stampa la lista ordinata alfabeticamente
 * scrivi anche la posizione della lista in cui  il nuovo utente si trova
 */
// Creazioni delle variabili necessarie per l'esecuzione
var listSurname = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var yourSurname = prompt('Inserisci il tuo cognome');

// Inserimento cognome utente in ultima posizione
listSurname.push(yourSurname);
console.log('Lista cognomi: ', listSurname )

// Stampa la lista in ordine alfabetico
listSurname.sort();
console.log('Lista cognomi in ordine alfabetico: ', listSurname);

// Stampa la posizione della lista in cui  il nuovo utente si trova
var positonSurname = listSurname.indexOf(yourSurname);
console.log('Il tuo cognome è nella posizione n: ', positonSurname + 1);
