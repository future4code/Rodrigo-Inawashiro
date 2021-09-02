import React from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"
import foto from "./components/Header/Foto Rosto.PNG"

const usuarioAstromatch = {
  nome: "Juan"
  foto: 
}

const App = () => {

  //Renderização Condicional
  // Estado que diz qual é a tela que está aparecendo
  // Função para mudar de tela


  return (
    <div>
      Astromatch
      <HomePage/>
      <MatchesPage/>
    </div>
  )

}

export default App