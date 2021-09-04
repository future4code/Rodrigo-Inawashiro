import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import {HomeContainer, Profile, ProfileImage } from "./styled"


export const HomePage = () => {

    const [profile, setProfile] = useState({})
    
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/person"
    
    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const choosePerson = () => {
        console.log("Botão de escolha")
        // saber se a escolha foi x ou <3
        //Fazer a requisição choose Person (POST)
        //No caso de sucesso(then), pedir mais um perfil
    }


    return(
        <HomeContainer>
            <Profile>
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={choosePerson}>X</button>
                    <button onClick={choosePerson}>coração</button>
                </div>
            </Profile>
           
        </HomeContainer>
    )
}

