var Animale = /** @class */ (function () {
    function Animale(nome, verso) {
        this.nome = nome;
        this.verso = verso;
    }
    Animale.prototype.versoanimale = function () {
        return this.verso;
    };
    return Animale;
}());
var gatto = new Animale("gatto", "miauu");
console.log(gatto.versoanimale());
var cane = new Animale("cane", "bau");
console.log(cane.versoanimale());
