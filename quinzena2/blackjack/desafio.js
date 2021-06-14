/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Bem vindo ao jogo de Blackjack!")

    let jogo = confirm("Quer iniciar uma nova rodada")
     
    if (jogo ) {
       let carta1Usuario = comprarCarta()
       let carta2Usuario = comprarCarta() 
       let carta3Usuario = comprarCarta()
       let carta4Usuario = comprarCarta()      
       let carta1Pc = comprarCarta()
       let carta2Pc = comprarCarta()

       //Desafio 8-

       if (carta1Usuario[0] && carta2Usuario[0] || carta1Pc[0] && carta2Pc[0])  {
       
         let carta1Usuario = comprarCarta()
         let carta2Usuario = comprarCarta()
         let carta1Pc = comprarCarta()
         let carta2Pc = comprarCarta()

       }
  
       let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
       let pontuacaoPc = carta1Pc.valor 
       let revelacaoPc = carta2Pc.valor
       let pontuacaoUsuario2 = carta1Usuario.valor + carta2Usuario.valor + carta3Usuario.valor
         

       //Desafio 9-

       let mostrar =  confirm(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto}
       A carta revelada do computador é ${carta1Pc.texto}
       "Deseja comprar mais uma carta?"`)

       //desafio 10-

      
      
       let comprarMais = confirm(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto} ${carta3Usuario.texto}
       Sua pontuação é ${pontuacaoUsuario2}. Deseja comprar mais uma carta?`)

       if (pontuacaoUsuario2 > 21)  {
          console.log(" Você perdeu!!")

       } else if (pontuacaoUsuario2 == 21) {
          console.log("Voce ganhou!!!")
          
       } else   {
         console.log(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto} ${carta3Usuario.texto} 
         computador ganhou!!`)
       }

       
  
      }

      
