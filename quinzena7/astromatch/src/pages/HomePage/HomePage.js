import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import {HomeContainer, Profile, ProfileImage } from "./styled"
import Button from '@material-ui/core/Button'




export const HomePage = () => {

    const [profile, setProfile] = useState({})
    const [person, setPerson] = useState("")
    
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/person"
    
        const getProfile = () => {
        axios.get(url)
        .then((res) => {
            
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
            {!profile ? <div> Acaba ram os perfis! Aperte o botão de limpar</div>:
            <Profile>
                <h1>astromatch</h1>
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <h3>{profile.bio}</h3>
                <div>
                    <Button onClick={() => choosePerson(false)} variant="contained" color="primary">
                        XXXXX
                    </Button>
                    <Button onClick={() => choosePerson(true)} variant="contained" color="secondary">
                        Match
                    </Button>
                </div>
            </Profile>
            }
        </HomeContainer>
    )
}

