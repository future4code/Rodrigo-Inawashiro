<<<<<<< HEAD
<<<<<<< HEAD
 // Exemplos
=======
// Exemplos

>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}
=======
// Exercícios de interpretação de código
>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530

// 1)O que vai ser impresso no console?
// a)Seria impresso  10 e 50
// b) Sem console.log não seria impresso nada , não apareceria no console

<<<<<<< HEAD
  console.log(mensagem)
<<<<<<< HEAD
=======
}

>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  
<<<<<<< HEAD
  const altura = Number(prompt(Digite a altura:))
  const largura = Number(prompt(Digite a largura:))
=======
  const altura = Number(prompt("Digite a altura:"))
  const largura = Number(prompt("Digite a largura:"))
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
  const areaRetangulo = altura*largura
  console.log(areaRetangulo)

}
<<<<<<< HEAD
// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt(Digite o ano atual:))
  let nascimento = Number(prompt(Digite o seu ano de nascimento:))
=======

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let nascimento = Number(prompt("Digite o seu ano de nascimento:"))
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
  const idade = anoAtual-nascimento
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
<<<<<<< HEAD
  let peso = Number(prompt(Digite o seu peso:))
  let altura = Number(prompt(Digite a sua altura:))
=======
  let peso = Number(prompt("Digite o seu peso:"))
  let altura = Number(prompt("Digite a sua altura:"))
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
  const imc = peso/(altura*altura)
  console.log(imc)
=======

//2) a) Essa função transforma em letras minusculas as letras e verifica se a palavra "cenoura" se encontra 
//na entrada do usuario, retornando true ou false.

//b) i) true
//  ii) true
//  iii) true 

//Exercícios de escrita de código
>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530

//1)a)

<<<<<<< HEAD
// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
<<<<<<< HEAD
  const nome= prompt(Digite o seu nome:)
  const idade = prompt(Digite a sua idade:)
  const email = prompt(Digite o seu email:)
  console.log(Meu nome é  + nome + , tenho  + idade + anos, e o meu email é  + email+.)
=======
  const nome= prompt("Digite o seu nome:")
  const idade = prompt("Digite a sua idade:")
  const email = prompt("Digite o seu email:")
  console.log("Meu nome é " + nome + ", tenho " + idade +" anos, e o meu email é " + email+".")
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
}
=======
/*function falarSobreVoce() {
>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530

    const pessoal = (`Eu sou ${eu}, tenho ${numero}anos, moro em ${lugar} e sou ${trabalho}`)
    const eu = Rodrigo
    const numero = 33
    const lugar = Sampa 
    const trabalho = programador

<<<<<<< HEAD
// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
<<<<<<< HEAD
  let coresFavoritas1 = prompt(Digite sua primeira cor favorita:)
  let coresFavoritas2 = prompt(Digite sua segunda cor favorita:)
  let coresFavoritas3 = prompt(Digite sua terceira cor favorita:)  
=======
  let coresFavoritas1 = prompt("Digite sua primeira cor favorita:")
  let coresFavoritas2 = prompt("Digite sua segunda cor favorita:")
  let coresFavoritas3 = prompt("Digite sua terceira cor favorita:")  
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
  const arrayCores = [coresFavoritas1,coresFavoritas2,coresFavoritas3]

  console.log(arrayCores)
  
=======
    return eu
    return numero
    return lugar
    return trabalho
    return pessoal
>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530


}

<<<<<<< HEAD
// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
<<<<<<< HEAD
  const comida = prompt(Digite sua comida preferida:)
=======
  const comida = prompt("Digite sua comida preferida:")
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
  console.log(comida.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
<<<<<<< HEAD
  let custoEspetaculo = Number(prompt(Diga qual o custo do espetaculo:))
  let valorIngresso = Number(prompt(Diga qual valor de cada ingresso:))
=======
  let custoEspetaculo = Number(prompt("Diga qual o custo do espetaculo:"))
  let valorIngresso = Number(prompt("Diga qual valor de cada ingresso:"))
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
  console.log(custoEspetaculo/valorIngresso)
=======
console.log(falarSobreVoce)*/

>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530


<<<<<<< HEAD
// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
<<<<<<< HEAD
  let string1 = prompt(Diga sua cor preferida:)
  let string2 = prompt(Diga outra cor :)
=======
  let string1 = prompt("Diga sua cor preferida:")
  let string2 = prompt("Diga outra cor :")
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
  console.log(string1.length === string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
<<<<<<< HEAD
  let comida1 = prompt(Diga o nome de uma comida:)
  let comida2 = prompt(Diga uma sobremesa:)
  console.log(comida1.toLowerCase() === comida2.toLowerCase())
=======
//b)

/*function informaçoesPessoais(nome, idade, cidade, profissão) {
    const pessoa = (`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou ${profissão}.`)
    return pessoa

}

console.log(informaçoesPessoais("Rodrigo", "40", "Itaqua", "Pogramador"))*/
>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530


// 2- Escreva as funções explicadas abaixo:

//a)
/*function numeros(n1,n2) {
    const soma = (n1+n2)
    return soma
}
 
console.log(numeros(4,8))
console.log(numeros(2,15))*/

//b)
/*function numeros(n1,n2) {
    const maiorIgual = (n1>=n2)
    return maiorIgual
}
 console.log(numeros(7,4))
 console.log(numeros(5,9))*/

/* c)
function numeroPar (n) {
    const resultado = (n%2==0)
    return resultado
}

console.log(numeroPar(5))
console.log(numeroPar(4))*/

//d)
/*const verificarFrase = (texto) => {
    const verificar = texto
    return verificar
}

const frase = verificarFrase(prompt("Escreva sua frase:"))

console.log("Contagem da frase:"+frase.length+"\n"+"Frase em letras maiusculas:"+frase.toUpperCase())*/

//3)

/*const num1 = 30
const num2 = 3

<<<<<<< HEAD
  console.log(labenuIdade == sim && labenuescolaridade == sim && labenuDisponibilidade == sim)
=======
  let comida1 = prompt("Diga o nome de uma comida:")
  let comida2 = prompt("Diga uma sobremesa:")
  console.log(comida1.toLowerCase() === comida2.toLowerCase())
=======
function somarNumeros (num1, num2)  {
    const soma = num1 + num2
    return soma
}
>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530

function subtrairNumeros(num1, num2) {
    const subtracao = num1 - num2
    return subtracao
}

function multiplicarNumeros(num1, num2) {
    const multiplicacao = num1 * num2
    return multiplicacao
}

function dividirNumeros(num1, num2) {
    const divisao = num1 / num2
    return divisao
}


console.log("Soma: ",somarNumeros())
console.log("Subtração: ",subtrairNumeros())
console.log("Multiplicação: ",multiplicarNumeros())
console.log("ddivisão: ",dividirNumeros())*/






<<<<<<< HEAD
// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
=======
>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530



<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
=======
  


>>>>>>> c9ceb51ab0a6e0ea7bdc628d24e451ea4a409530
