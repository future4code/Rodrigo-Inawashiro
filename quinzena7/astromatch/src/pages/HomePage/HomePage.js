import React from "react"
import {HomeContainer, Profile, ProfileImage } from "./styled"


export const HomePage = () => {
    return(
        <HomeContainer>
            <Profile>
                <ProfileImage src={"https://picsum.photos/500/500"}/>
                <h2>Chijo</h2>
                <p>Oi, eu sou a Chijo, aqui tereemos dados</p>
                <div>
                    <button>X</button>
                    <button>coração</button>
                </div>
            </Profile>
           
        </HomeContainer>
    )
}