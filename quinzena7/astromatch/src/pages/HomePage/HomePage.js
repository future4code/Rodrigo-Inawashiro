import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import {HomeContainer, Profile, ProfileImage } from "./styled"




export const HomePage = () => {

    const [profile, setProfile] = useState({})
    const [person, setPerson] = useState("")
    
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/person"
    
        const getProfile = () => {
        axios.get(url)
        .then((res) => {
            console.log(res.data.profile)
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

     useEffect (() => {
         getProfile()
     },[])

    const choosePerson = (choice) => {
        console.log(profile.id);
        const body = {
            id: profile.id,
            choice: choice
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/choose-person",body)
        
        .then((person) => {
            getProfile()
            setPerson(person.data.choosePerson)
        })
        .catch((error) => {
            alert("Algo deu erado, tente novamente")
        })
        
    }


    return(
        <HomeContainer>
            {!profile ? <div> Acabaram os perfis! Aperte o botão de limpar</div>:
            <Profile>
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <h3>{profile.bio}</h3>
                <div>
                    <button onClick={() => choosePerson(false)}>X</button>
                    <button onClick={() => choosePerson(true)}>coracao</button>
                </div>
            </Profile>
            }
        </HomeContainer>
    )
}

