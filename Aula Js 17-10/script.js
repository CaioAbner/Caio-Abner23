// Exerc.3

// let temp = Number(prompt("Digite uma temperatura em graus Celsius"));
// console.log(temp);

// let convertTemp = (temp*9/5)+32;

// let value = convertTemp;


// confirm(`O valor da temperatura em Fahrenheit é igual a = ${value}`);
// console.log(`O valor da temperatura em Fahrenheit é igual a = ${value}`);

// Exerc.4

// let hValue = Number(prompt("Digite o valor da sua hora trabalhada :"));
// console.log(hValue);

// let hHoraT = Number(prompt("Digite quantas horas você trabalha no mês :"));
// console.log(hHoraT);

// let salarioFunc = (hValue * hHoraT);
// console.log(salarioFunc);

// confirm(`O seu salário é equivalente a : ${salarioFunc}`);

// Exerc.5 

// let num1 = Number(prompt("Digite seu primeiro número :"));
// console.log(num1)

// let num2 = Number(prompt("Digite seu segundo número :"));
// console.log(num2);

// if (num1 > num2) {
//     confirm("Seu primeiro número é o maior !")
//     console.log("O primeiro número é o maior !")
// } else if (num1 < num2) {
//     confirm("Seu Segundo número é o maior !")
//     console.log("O segundo número é o maior !")
// }

// Exerc.6

// let num = Number(prompt("Digite um número de 1 a 10 e veja se ele é par ou ímpar !"));
// console.log(num);

// if (num % 2 == 0) {
//    console.log("É par")
//}

// if (num % 2 != 0) {
//    console.log("É ímpar")
//}

// if (num == 1) {
//     confirm("Seu número é ímpar !")
//     console.log("Seu número é ímpar !")
// }

// else if (num == 2) {
//     confirm("Seu número é par !")
//     console.log("Seu número é par !")
// } 

// else if (num == 3) {
//     confirm("Seu número é ímpar !")
//     console.log("Seu número é ímpar !")
// }

// else if (num == 4) {
//     confirm("Seu número é par !")
//     console.log("Seu número é par !")
// }

// else if (num == 5) {
//     confirm("Seu número é ímpar !")
//     console.log("Seu número é ímpar !")
// }

// else if (num == 6) {
//     confirm("Seu número é par !")
//     console.log("Seu número é par !")
// }

// else if (num == 7) {
//     confirm("Seu número é ímpar !")
//     console.log("Seu número é ímpar !")
// }

// else if (num == 8) {
//     confirm("Seu número é par !")
//     console.log("Seu número é par !")
// }

// else if (num == 9) {
//     confirm("Seu número é ímpar !")
//     console.log("Seu número é ímpar !")
// }

// else if (num == 10) {
//     confirm("Seu número é par !")
//     console.log("Seu número é par !")
// }

// else {
//     alert("Seu número é inválido");
//     console.log("Seu número é inválido");
// }

// Exerc.7

let ddd = Number(prompt("Digite o seu DDD : "));
console.log(ddd);

if (ddd == 85) {
    confirm("Você é de Fortaleza, seja bem-vindo !")
    console.log("Você é de Fortaleza, seja bem-vindo !")
}

else if (ddd == 68) {
    confirm("Você não é de Fortaleza, você é do Acre ! Aliás, como estão os dinossauros ?")
    console.log("Você não é de Fortaleza, você é do Acre, seja bem-vindo !")
}

else if (ddd == 82) {
    confirm("Você não é de Fortaleza, você é de Alagoas !")
    console.log("Você não é de Fortaleza, você é de Alagoas, seja bem-vindo !")
}

else if (ddd == 96) {
    confirm("Você não é de Fortaleza, você é do Amapá !")
    console.log("Você não é de Fortaleza, você é do Amapá, seja bem-vindo !")
}

else if (ddd == 62 || ddd == 64) {
    confirm("Você não é de Fortaleza, você é de Goiás !")
    console.log("Você não é de Fortaleza, você é de Goiás, seja bem-vindo !")
}

else if (ddd == 71 || ddd == 73 || ddd == 74 || ddd == 75 || ddd == 77) {
    confirm("Você não é de Fortaleza, você é da Bahia !")
    console.log("Você não é de Fortaleza, você é da Bahia, seja bem-vindo !")
}

else if (ddd != 85) {
    confirm("Você não é de Fortaleza, paia")
    console.log("Você não é de Fortaleza, paia")
}