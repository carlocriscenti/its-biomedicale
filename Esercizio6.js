function calcolaAreaRettangolo(base, altezza) {
    return base * altezza;
}
function èQuadrato(base, altezza) {
    return base === altezza;
}
var baseRettangolo = 10;
var altezzaRettangolo = 5;
var area = calcolaAreaRettangolo(baseRettangolo, altezzaRettangolo);
console.log("L'area del rettangolo con base ".concat(baseRettangolo, " e altezza ").concat(altezzaRettangolo, " \u00E8: ").concat(area));
var latoQuadrato = 7;
var areaQuadrato = calcolaAreaRettangolo(latoQuadrato, latoQuadrato);
console.log("L'area del quadrato con lato ".concat(latoQuadrato, " \u00E8: ").concat(areaQuadrato));
var figura1Base = 6;
var figura1Altezza = 6;
var risultatoFigura1 = èQuadrato(figura1Base, figura1Altezza);
console.log("La figura con base ".concat(figura1Base, " e altezza ").concat(figura1Altezza, " \u00E8 un quadrato? ").concat(risultatoFigura1));
var figura2Base = 8;
var figura2Altezza = 4;
var risultatoFigura2 = èQuadrato(figura2Base, figura2Altezza);
console.log("La figura con base ".concat(figura2Base, " e altezza ").concat(figura2Altezza, " \u00E8 un quadrato? ").concat(risultatoFigura2));
