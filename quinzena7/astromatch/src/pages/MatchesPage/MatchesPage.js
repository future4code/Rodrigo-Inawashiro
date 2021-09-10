import axios from "axios"
import React, { useEffect, useState } from "react"
import { MatchesContainer } from "./styled"


export const MatchesPage = () => {
    const [matchesPage, setMatchesPage] = useState([])
    const [changeMatches, setChangeMatches] = useState('')

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/matches"

    const getMaches = () => {
        axios.get(url)
        .then((res) => {
            console.log(res.data.MatchesPage)
            setMatchesPage(res.data.MatchesPage)
        })
        .catch((err) => {
            console.log(err.matchesPage)
        })
    }

    useEffect (() => {
        getMaches()
    },[])

    return(
        <MatchesContainer>
            <ul>
                <li>matches</li>
                <li>matches</li>
                <li>matches</li>
                <li>matches</li>
            
            </ul>
           
        </MatchesContainer>
    )
}