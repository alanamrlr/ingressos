/*Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar. */

parOuImpar(1);

function parOuImpar(num){
    if (num %2 == 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}