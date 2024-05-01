import React from 'react'
import Rock from './images/Rock.png'
import Paper from './images/Paper.png'
import Scissor from './images/Scissor.png'

export default function PlayingSpace({player, computer}){
    const choice_dict = {
        'Paper': Paper,
        'Rock': Rock,
        'Scissor': Scissor,
    };
    return(
        <div className='PlayingSpace'>
            <div className = 'Player-space'>
                <img src = {choice_dict[player]} alt = {player} height = '350rem' width = '275rem'/>
            </div>
            <div className = 'Computer-space'>
                <img src = {choice_dict[computer]} alt = {computer} height = '350rem' width = '275rem'/>
            </div>
        </div>
    ) 
}