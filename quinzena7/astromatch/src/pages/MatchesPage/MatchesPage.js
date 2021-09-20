import axios from "axios"
import React, { useEffect, useState } from "react"
import { ListItemContainer, MatchesContainer, RoundImage, ItemName} from "./styled"


export const MatchesPage = () => {
    const [matchesPage, setMatchesPage] = useState([])
    const [changeMatches, setChangeMatches] = useState('')


    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/matches"

    const getMaches = () => {
        axios.get(url)
        .then((res) => {
            console.log(res.data.matchesPage)
            setMatchesPage(res.data.matches)
        })
        .catch((err) => {
            console.log(err.matchesPage)
        })
    }

    useEffect (() => {
        getMaches()
    },[])

    
    const newArrayMatch = matchesPage.map((item) => {              
        return(
            <ListItemContainer>
                <RoundImage src={item.photo}/>
                <ItemName>{item.name}</ItemName>
            </ListItemContainer>
        )  
        
      
    })
     
    return (
        <MatchesContainer>
            <ul>
                {newArrayMatch}
        
            </ul>       
        </MatchesContainer>
        
    )   
    
       
    
}