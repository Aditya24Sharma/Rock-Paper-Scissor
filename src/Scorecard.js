import React from 'react';

export default function Scorecard({title, score}){
    return(
        <div className='scorecard'>
            <h2>{title}</h2>
            <p className='scores'>{score}</p>
        </div>
    ); 
}