const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

fetch(url) // fetch: processamento assíncrono - em algum momento se obterá a resposta, não na hora
    .then((response) => response.json()) // () => outra maneira de chamar função
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))