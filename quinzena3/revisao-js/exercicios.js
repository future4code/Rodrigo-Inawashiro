// EXERCÍCIO 01 ok
function inverteArray(array) {
  let arrayNum = array.map((valor, i) => {
  return array[array.length -1 -i]
})
return arrayNum
}

// EXERCÍCIO 02 ok
function retornaNumerosParesElevadosADois(array) {
let numElevPotencia =[]
for(let i = 0; i < array.length; i++) {
if (array[i] % 2 === 0) {
  numElevPotencia.push(array[i] **2)
}
}
return numElevPotencia
}

// EXERCÍCIO 03

function retornaNumerosPares(array) {  
/*let numPares = []
for(let i = 0; i < array.length; i++)  {
if(array[i] % 2 === 0) {
numPares.push(array[i])
}
return numPares
}*/

let arrayNumPares = []
for(let valor of array)  {
  if(valor % 2 === 0) {
    arrayNumPares.push(valor)    
  }
}
console.log(arrayNumPares)
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0;
  for(let i = 0; i < array.length; i++) {
    maiorNumero = array[i]
  }
  console.log(maiorNumero)
}

// EXERCÍCIO 05 ok
function retornaQuantidadeElementos(array) {
const cores = ["Azul", "Amarelo", "Vermelho"]
return array.length    
}

// EXERCÍCIO 06 ok
function retornaExpressoesBooleanas() {
const respostas = [false, false ,true ,true ,true]
return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08 ok
function checaTriangulo(a, b, c) {
if (a !== b && b !== c && c !== a)  {
return "Escaleno"
}else if (a === b && b === c && c === a)  {
  return "Equilátero"
} else (a === b && b !== c) 
  return "Isósceles"
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

const comparaNumeros = {
  maiorNumero: 0,
  maiorDivisivelPorMenor: false,
  diferença:0
}

if (num1 > num2) {
  comparaNumeros.maiorNumero = num1
  comparaNumeros.maiorDivisivelPorMenor = num1 % num2 === 0
  comparaNumeros.diferença = num1 - num2

} else if (num2 > num1) {
  comparaNumeros.maiorNumero = num2
  comparaNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
  comparaNumeros.diferença = num2 - num1

}else{
  comparaNumeros.maiorNumero = num2
  comparaNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
  comparaNumeros.diferença = 0

}

return comparaNumeros
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
for(let i = 0; i <= array.length - 1; i++) {
for(let j = i + 1; j <= array.length; j++) {
  if(array[i] > array[j]) {
    let aux = array[i]
    array[i] = array[j]
    array[j] = aux
  }
}  
}
let novoArray = []
novoArray.push(array[array.length-2])
novoArray.push(array[1])
return novoArray
}

// EXERCÍCIO 11 ok
function ordenaArray(array) {
let ordenar = array.sort(function(a, b)  {
return a -b
})
return ordenar
}

// EXERCÍCIO 12 ok
function filmeFavorito() {
let filme = {
nome: "O Diabo Veste Prada" ,
ano: 2006,
diretor: "David Frankel",
atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return filme
}

// EXERCÍCIO 13 ok
function imprimeChamada() {
let filme = {
nome: "O Diabo Veste Prada" ,
ano: 2006,
diretor: "David Frankel",
atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
}
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 14 ok
function criaRetangulo(lado1, lado2) {
let retangulo = {
largura: lado1,
altura: lado2,
perimetro: (lado1 + lado2)* 2,
area: (lado1 * lado2)
}
return retangulo

}

// EXERCÍCIO 15 ok
function anonimizaPessoa(pessoa) {
let novaPessoa = {
...pessoa,
nome: "ANÔNIMO",  
}
return novaPessoa
}

// EXERCÍCIO 16A ok
function maioresDe18(arrayDePessoas) {
const maiorDe18 = arrayDePessoas.filter((maisDe18) =>  {
return maisDe18.idade >= 18
})
return maiorDe18

}

// EXERCÍCIO 16B ok
function menoresDe18(arrayDePessoas) {
const menorDe18 = arrayDePessoas.filter((menosDe18) =>  {
return menosDe18.idade < 18
})
return menorDe18
}

// EXERCÍCIO 17A ok
function multiplicaArrayPor2(array) {
const vezesDois = array.map(dobro => dobro * 2)
return vezesDois
}

// EXERCÍCIO 17B ok
function multiplicaArrayPor2S(array) {
let vezesDoisString = []
array.map((num) =>  {
let numString = num * 2
vezesDoisString.push(numString.toString())
})
return vezesDoisString

}

// EXERCÍCIO 17C ok
function verificaParidade(array) {
let arrayNumero = []
array.map((numero) => {
if (numero % 2 === 0) {
  arrayNumero.push(`${numero} é par`)
} else {
  arrayNumero.push(`${numero} é ímpar`)
}
})
return arrayNumero
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A ok
function ordenaPorNome(consultasNome) {
let newArray = consultasNome.sort(function (a, b) {
if (a.nome > b.nome) {
  return 1;
}
if (a.nome < b.nome) {
  return -1;
}
return 0;
});
return newArray 
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
