const listaNum = [1, 3, 4, 6, 5, 7, 8, 10, 12, 16, 13, 22, 90, 35, 33, 32, 36, 48, 0, 2];
for (let i = 0; i < listaNum.length; i++) {
    const num = listaNum[i];
    if(num % 2 === 0) {
        console.log(num);
    }    
}