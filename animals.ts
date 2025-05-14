class Animale {
  nome: string;
  verso: string;

  constructor(nome: string, verso: string) {
    this.nome = nome;
    this.verso = verso;
  }

 versoanimale(): string{
    return this.verso;
 }
 }

 let gatto = new Animale("gatto", "miauu");
 console.log(gatto.versoanimale()); 

let cane = new Animale("cane", "bau");
 console.log(cane.versoanimale()); 
 