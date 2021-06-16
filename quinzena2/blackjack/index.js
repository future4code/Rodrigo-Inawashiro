//Exercícios de interpretação de código

//1) Leia o código abaixo:

//a) Resposta: Como no console.log está pedindo : item, index e array vai ser impresso o nome, o apelido e a
//posição no array

//2) Leia o código abaixo:

//a) Resposta: Dessa vez só será impresso os nomes: "Amanda Rangel", "Laís Petra" e "Letícia Chijo"


//3) Leia o código abaixo:

//a) Resposta: serão impressos os apelidos: "Mandi" e "Laura".


// Exercícios de escrita de código:

//1) 

/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]*/


 //a) Crie um novo array que contenha apenas o nome dos doguinhos

 /*const arrayPets = pets.map((item) => {
    return item.nome
 })

 console.log(arrayPets)*/

 //b) Crie um novo array apenas com os cachorros salsicha

 
/*const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]*/

/*const novoArrayPet2= pets.filter((qualRaca) => {
   return qualRaca.raca === "Salsicha"
})

console.log(novoArrayPet2)*/

/*c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
 A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"*/

 /*const novoArrayPet3= pets.filter((racaPoodle) => {
   return racaPoodle.raca === "Poodle"
})

console.log(novoArrayPet3)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.racaPoodle}`)*/

//2) Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
//utilizando as funções de array map e filter

/*const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]*/

//a) Crie um novo array que contenha apenas o nome de cada item

/*const nomeProduto = produtos.map((item) => {
   return item.nome
})

console.log(nomeProduto)*/

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
// aplicando 5% de desconto em todos eles

/*const produtosComdesconto = produtos.map((prod)=> {
   return {...prod,preco: (prod.preco * 0.95).toFixed(2)}
})

console.log(produtosComdesconto)*/

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

/*const nomeBebida = produtos.filter((filtrarBebidas) => {
   return filtrarBebidas.categoria === "Bebidas"
})

console.log(nomeBebida)*/

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

/*const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

/*const nomeMarca = produtos.filter((filtrarMarca) => {
   return filtrarMarca.nome === "Detergente Ypê"
})

console.log(nomeMarca)

const nomeMarca2 = produtos.filter((filtrarMarca) => {
     return filtrarMarca.nome === "Sabão em Pó Ypê"
})

console.log(nomeMarca2)*/

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"





