import inquirer from 'inquirer';

inquirer.prompt([

{

type: 'input',

name: 'temp',

message: 'Inserisci un numero',

}

]).then(() => {

let n = 10; 

while (n >= 1) {

console.log(n);

n--; 

    }
});
