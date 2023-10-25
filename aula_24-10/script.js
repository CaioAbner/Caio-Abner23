// Exerc 12

// let dataNasc = Number(prompt("Digite sua data de nascimento :"));
// console.log(dataNasc);

// if (dataNasc >= 2000) {
//         confirm("Data de Nascimento válida")
//         console.log("Data de Nascimento válida")
// }

// else if (dataNasc <= 2000) {
//     confirm("Data de Nascimento inválida")
//     console.log("Data de Nascimento inválida")
// }

// let idade = (2023 - dataNasc);
// console.log(`Sua idade é : ${idade}`);
// confirm(`Sua idade é : ${idade}`);

// Exerc 13

// let lado01 = Number(prompt("Digite o primeiro lado do seu triângulo :"))
// console.log(lado01)

// let lado02 = Number(prompt("Digite o segundo lado do seu triângulo :"))
// console.log(lado02)

// let lado03 = Number(prompt("Digite o terceiro lado do seu triângulo :"))
// console.log(lado03)

// let result = (lado01 + lado02 + lado03)

// if (lado01 == lado02 && lado02 == lado03) {
//     confirm("Seu triângulo é equilátero pois possui três lados iguais")
//     console.log("Seu triângulo é equilátero pois possui três lados iguais")
// } else if (lado01 != lado02 && lado02 != lado03) {
//     confirm("Seu triângulo é escaleno pois possui três lados diferentes")
//     console.log("Seu triângulo é escaleno pois possui três lados diferentes")
// } else if (lado01 == lado02 && lado02 != lado03) {
//     confirm("Seu triângulo é isósceles pois possui três lados iguais")
//     console.log("Seu triângulo é isósceles pois possui três lados iguais")
// }

// Exerc 1 while

// let i = 1 

// while (i <= 10) {
//     console.log("Olá mundo !!");
//     i++
// }

// Exerc 1 for

// for (let i = 1; i <= 10; i++) {
//     console.log("Olá mundo !!");
// }

// Exerc 2 while

// let i = 0

// while(i <= 100) {
//     console.log(i)
//     i++
// }

// Exerc 2 for 

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
// }

// Exerc 3 while 

// let i = 0;
// let numUser = Number(prompt("Digite um número :"));

// while (i <= numUser) {
//     console.log(i)
//     i++
// }

// Exerc 3 for

// let numUser = Number(prompt("Digite um número :"));

// for (let i = 1; i <= numUser; i++) {
//     console.log(i);
// }

// Exerc 4 while/for 


// Exerc while/for

// let i = 1;

// let contadorPar;

// let contadorImpar;

// while (true) {

// }

let qtd_Notas = 0;
let soma = 0;

for (let i = 1; i <= 6; i++) {
    let nota = Number(prompt("Digite a nota :"));
    // soma = soma + nota
    soma += nota;
    console.log(soma);
    qtd_Notas++;
}

let media = soma / qtd_Notas;
console.log("Média: " + media);