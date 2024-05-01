import React from 'react'

export default function Choices({option, onSelect}){
    const handleClick = () =>{
        //Since the option is in all Caps changing it to capitalize
        const player_choice = option.charAt(0) + (option.slice(1)).toLowerCase(); 
        onSelect(player_choice);
    };
    return(
        <button className = 'Option-button' onClick={handleClick}>
            <h1>{option}</h1>
        </button>
    );
}