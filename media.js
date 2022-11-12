const nota1 = 7;
const nota2 = 6;
const nota3 = 9;

const mediaNotas = (nota1 + nota2 + nota3) / 3;

if(mediaNotas > 7) {
    console.log('Você foi aprovado.');
}else if(mediaNotas <= 7 &&  mediaNotas >= 5){
    console.log('Você está de recuperação.');
}else {
    console.log('Você está reprovado.');
}