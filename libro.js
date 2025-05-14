var Libro = /** @class */ (function () {
    function Libro(titolo, autore) {
        this.titolo = titolo;
        this.autore = autore;
        this.disponibile = true;
    }
    Libro.prototype.prendiInPrestito = function () {
        this.disponibile = false; // Imposta semplicemente a non disponibile
    };
    Libro.prototype.restituisci = function () {
        this.disponibile = true; // Imposta semplicemente a disponibile
    };
    return Libro;
}());
// Istanzia 2 libri
var libro1 = new Libro("Moby Dick", "Herman Melville");
var libro2 = new Libro("Guerra e Pace", "Lev Tolstoj");
// Stampa stato iniziale (mostra l'intero oggetto)
console.log("--- Stato Iniziale ---");
console.log(libro1);
console.log(libro2);
// Cambia stato
console.log("\n--- Cambio Stato ---");
libro1.prendiInPrestito(); // libro1 diventa non disponibile
libro2.prendiInPrestito(); // libro2 diventa non disponibile
libro1.restituisci(); // libro1 torna disponibile
// Stampa stato finale (mostra l'intero oggetto)
console.log("\n--- Stato Finale ---");
console.log(libro1);
console.log(libro2);
// Accesso diretto alle proprietà per vedere lo stato
console.log("\n--- Verifica disponibilità ---");
console.log("\"".concat(libro1.titolo, "\" \u00E8 disponibile? ").concat(libro1.disponibile)); // true
console.log("\"".concat(libro2.titolo, "\" \u00E8 disponibile? ").concat(libro2.disponibile)); // false
