let str = gets(); 
let strSplit = str.toLowerCase().split('');
let vogais;
let espBrancos;

vogais = strSplit.filter(vetVogais);
espBrancos = strSplit.filter(vetBrancos);

function vetVogais(str) {
  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
    return true;
  } 
}

function vetBrancos(str) {
  if (str === " ") {
    return true;
  }
}

print("Espacos em branco: " + espBrancos.length + " Vogais: " + vogais.length)