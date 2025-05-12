"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'temp',
        message: 'Inserisci un numero',
    }
]).then(function () {
    var n = 10;
    while (n >= 1) {
        console.log(n);
        n--;
    }
});
