import React, {useState} from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"
import axios from 'axios'


const App = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/clear"

  const changePage = () => {
    if (currentPage === "home") {
      setCurrentPage("mattches")
    }else {
      setCurrentPage("home")
    }
  }

  const cleanMatches = () => {
    axios.put(url);
    alert("Matches apagados")
  }
  
  return (
    <div>
      {currentPage === "home" ? <HomePage/> : <MatchesPage/>}
      <button onClick={changePage}>{currentPage === "home" ? "Ir para Matches" : "Ir para Home"}</button>
      <button onClick={cleanMatches}>Limpar Matches</button>
    </div>
  
  )  

} 


export default App