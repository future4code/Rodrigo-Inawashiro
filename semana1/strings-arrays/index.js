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

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

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

}

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
  


}

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

}

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



}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt(Digite o ano atual:))
  const anoDeNascimento = Number(prompt(Digite seu ano de nascimento:))
  const anoEmissao = Number(prompt(Digite ano em que sua carteira de identidade foi emitida:))
  const idade = anoAtual - anoDeNascimento
  const tempoDeemissao = anoAtual - anoEmissao

  
  console.log((idade <= 20 && tempoDeemissao >= 5) || (idade > 20 && idade <= 50 && tempoDeemissao >= 10) || (idade > 50 && tempoDeemissao >= 15))



}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt(Digite um ano:))
  console.log((ano % 400 === 0) || (ano % 4 === 0) && (ano % 100 != 0))

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  let labenuIdade = (prompt(Você tem mais de 18 anos?))
  let labenuescolaridade = (prompt(Você possui ensino médio completo?))
  let labenuDisponibilidade = (prompt(Você possui disponibilidade exclusiva durante os horários do curso?))

  console.log(labenuIdade == sim && labenuescolaridade == sim && labenuDisponibilidade == sim)
=======
  let comida1 = prompt("Diga o nome de uma comida:")
  let comida2 = prompt("Diga uma sobremesa:")
  console.log(comida1.toLowerCase() === comida2.toLowerCase())



}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento:"))
  const anoEmissao = Number(prompt("Digite ano em que sua carteira de identidade foi emitida:"))
  const idade = anoAtual - anoDeNascimento
  const tempoDeemissao = anoAtual - anoEmissao

  
  console.log((idade <= 20 && tempoDeemissao >= 5) || (idade > 20 && idade <= 50 && tempoDeemissao >= 10) || (idade > 50 && tempoDeemissao >= 15))



}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Digite um ano:"))
  console.log((ano % 400 === 0) || (ano % 4 === 0) && (ano % 100 != 0))

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f

  let labenuIdade = (prompt("Você tem mais de 18 anos?"))
  let labenuescolaridade = (prompt("Você possui ensino médio completo?"))
  let labenuDisponibilidade = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"))

  console.log(labenuIdade == "sim" && labenuescolaridade == "sim" && labenuDisponibilidade == "sim")

<<<<<<< HEAD
}
=======
>>>>>>> 7712c29bc7314895577350418b27c0eb128b391f
