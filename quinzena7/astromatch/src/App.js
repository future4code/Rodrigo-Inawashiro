import React, {useState} from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"


const App = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const changePage = () => {
    if (currentPage === "home") {
      setCurrentPage("mattches")
    }else {
      setCurrentPage("home")
    }
  }

  const cleanMatches = () => {
    console.log("Esse botão vai limpar os matches")
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