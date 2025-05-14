class Libro {
  disponibile: boolean = true;

  constructor(public titolo: string, public autore: string) {}

  prendiInPrestito(): void {
    this.disponibile = false; // Imposta semplicemente a non disponibile
  }

  restituisci(): void {
    this.disponibile = true; // Imposta semplicemente a disponibile
  }
}

// Istanzia 2 libri
const libro1 = new Libro("Moby Dick", "Herman Melville");
const libro2 = new Libro("Guerra e Pace", "Lev Tolstoj");

// Stampa stato iniziale (mostra l'intero oggetto)
console.log("--- Stato Iniziale ---");
console.log(libro1);
console.log(libro2);

// Cambia stato
console.log("\n--- Cambio Stato ---");
libro1.prendiInPrestito(); // libro1 diventa non disponibile
libro2.prendiInPrestito(); // libro2 diventa non disponibile
libro1.restituisci();   // libro1 torna disponibile

// Stampa stato finale (mostra l'intero oggetto)
console.log("\n--- Stato Finale ---");
console.log(libro1);
console.log(libro2);

// Accesso diretto alle proprietà per vedere lo stato
console.log("\n--- Verifica disponibilità ---");
console.log(`"${libro1.titolo}" è disponibile? ${libro1.disponibile}`); // true
console.log(`"${libro2.titolo}" è disponibile? ${libro2.disponibile}`); // false