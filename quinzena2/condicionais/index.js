//Exercícios de interpretação de código

// Exercício 1

//a) Resposta: O código pede ao usúario que digite um número; e testa se o número é par com resto igual a zero.
//b) Resposta: Ele imprime o passou no teste para números pares com resto zero
//c) Resposta: Ele imprime Não passou no teste para números ímpares com resto diferente de zero;

//2)O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado;

//a) para o usuario escolher uma fruta e ter o resultado do nome da fruta e preço.
//b) "O preço da fruta, maça, é R$ 2.25"
//c) "O preço da fruta, Pêra  é  R$  5.5 / 5"

//3)Leia o código abaixo:

//a) Resposta: a primeira linha pede ao usuario que insira um número
//b) Resposta: a primeira mensagem seria: "Esse número passou no teste" e no caso de -10 seria undefined.
//c) Resposta: haverá um erro pois o console.log pede uma variavel que está em outro escopo, dentro das chaves .

// Exercícios de escrita de código

//1)

/*const idadeUsuario = Number(prompt("Digite a sua idade:"))

function cartaMotorista(maiorIdade){
    if (maiorIdade >= 18) {
    return "Você pode dirigir"
    }else {
    return "Você não pode dirigir."
    }

}

console.log(cartaMotorista(idadeUsuario))*/

//2)

/*const turno = prompt("Qual periodo do dia você estuda? Responda M-matutino, V-Vespertino ou N- noturno")

if (turno==="M") {
    console.log("Bom dia")
}else if (turno==="V") {
    console.log("Boa tarde")     
} else {
        console.log("Boa noite") 

}*/

//3)

/*const turno = prompt("Qual periodo do dia você estuda? Responda M-matutino, V-Vespertino ou N- noturno")

switch (turno)  {
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa tarde")
        break
    case "N":
        console.log("Boa noite")
        break
    default:
        console.log("Não foi encontrado")
        break

}*/

//4)

/*const genero = prompt("Qual gênero do filme:") === "fantasia"
const precoIngresso = prompt("Qual valor do ingresso:") === "15"

function assistirFilme (genero, precoIngresso)   {
    if (genero && precoIngresso)  {
    return "Bom filme"
    } else {
    return "Escolha outro filme :("
    }
}

console.log(assistirFilme(genero,precoIngresso))*/



