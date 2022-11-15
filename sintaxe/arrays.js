const pessoas = ['Jairo', 'Genoveva', 'Tibúrcio', 'Juraci'];
console.log(pessoas);
console.log(pessoas[0]); // primeira posição da array
console.log(pessoas[1]); // segunda ...
console.log(pessoas[2]);
console.log(pessoas[3]);

pessoas.push('Clotilde'); // adiciona ao final da array
console.log(pessoas[4]);

pessoas.pop('Clotilde'); // remove o ultimo item da array
console.log(pessoas[4]);

pessoas.shift('Gerivaldo'); // adiciona no início da array
console.log(pessoas[0]);

pessoas.unshift('Gerivaldo'); // remove do início da array
console.log(pessoas[0]);

console.log(pessoas.length); // saber o tamanho da array