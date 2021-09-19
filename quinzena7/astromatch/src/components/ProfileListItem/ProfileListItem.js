import React from "react"
import { ListItemContainer, RoundImage} from "./styled"


export default ProfileListItem = (props) => {
    return(
        <ListItemContainer>
            <RoundImage src={props.photo}/>
            <h2>{props.name}</h2>
        </ListItemContainer>
    )
}