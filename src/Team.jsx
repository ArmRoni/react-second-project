import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11); 

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        setTeam(team - 1);
    }
    const teamStyle = {
        border:"2px solid red",
        borderRadius:"15px"
    }

    return (
        <div style={teamStyle}>
            <h3>Player : {team}</h3>

            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}