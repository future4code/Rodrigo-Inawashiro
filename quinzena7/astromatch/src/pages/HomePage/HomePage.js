import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import {HomeContainer, Profile, ProfileImage } from "./styled"




export const HomePage = () => {

    const [profile, setProfile] = useState({})
    //const [choosePerson, setChoosePerson] = useState([])
    
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
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-inawashiro-Johnson/choose-person")
        //{
        //    "id": "71gMbZs2txS9LDvGK5Ew",
        //    "choice": true
        //}        
        //.then((person) => {
        //    setChoosePerson(person.data.choosePerson)
        //})
        //.catch((error){
        //    console.log(error.response)
        //})
        
    }


    return(
        <HomeContainer>
            {!profile ? <div> Acaram os perfis! Aperte o botão de limpar</div>:
            <Profile>
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <h3>{profile.bio}</h3>
                <div>
                    <button onClick={choosePerson}>X</button>
                    <button onClick={choosePerson}>coracao</button>
                </div>
            </Profile>
            }
        </HomeContainer>
    )
}

