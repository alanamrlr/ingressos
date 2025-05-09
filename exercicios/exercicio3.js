/*Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada. */

function adicao(a,b) {
    return a+b;
}

function subtracao(a,b) {
    return a-b;
}

function multiplicacao(a,b) {
    return a*b;
}

function divisao(a,b) {
    if (b == 0) {
        alert('Não existe divisão por 0');
    } else {
        return a/b;
    }
}