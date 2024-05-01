import React, { useState } from 'react';
import './styles.css';
import Title from './Title';
import Scorecard from './Scorecard';
import PlayingSpace from './PlayingSpace';
import Choices from './Choices';

export default function App(){
  const[selectedOption, setSelectedOption] = useState({player:'Rock', computer:'Rock'});
  const[scores, setScores] = useState({playerScore:0, computerScore:0 })

  const handleReset =() => {
    setScores({playerScore: 0, computerScore:0})
  }

  const handleOptionSelect = (player_choice) =>{

    const list = ['Rock', 'Paper', 'Scissor']
    const randomIndex = Math.floor(Math.random() * list.length);
    const computer_choice = list[randomIndex];
    
    setSelectedOption({player: player_choice, computer: computer_choice});

    if(player_choice == 'Rock' && computer_choice == 'Scissor'){
      setScores({playerScore: (scores.playerScore+1), computerScore: (scores.computerScore)})
    }
    else if(player_choice == 'Scissor' && computer_choice == 'Paper'){
      setScores({playerScore: (scores.playerScore+1), computerScore: (scores.computerScore)})
    }
    else if(player_choice == 'Paper' && computer_choice == 'Rock'){
      setScores({playerScore: (scores.playerScore+1), computerScore: (scores.computerScore)})
    }
    else if(player_choice == 'Rock' && computer_choice == 'Paper'){
      setScores({playerScore: (scores.playerScore), computerScore: (scores.computerScore+1)})
    }
    else if(player_choice == 'Scissor' && computer_choice == 'Rock'){
      setScores({playerScore: (scores.playerScore), computerScore: (scores.computerScore+1)})
    }
    else if(player_choice == 'Paper' && computer_choice == 'Scissor'){
      setScores({playerScore: (scores.playerScore), computerScore: (scores.computerScore+1)})
    }

    console.log('Player Choice', player_choice);
    console.log('Computer Choice', computer_choice);
  }
  return (
    <>
      <Title/>
      <button className = 'Reset' onClick = {handleReset}>
        <h2>RESET</h2>
      </button>
      <div className = 'App'>
        <div className='scorecard-container'>
          <Scorecard title = 'Player' score = {scores.playerScore}/>
        </div>
        <PlayingSpace player = {selectedOption.player} computer = {selectedOption.computer}/>
        <div className='scorecard-container'>
          <Scorecard title = 'Computer' score = {scores.computerScore}/>
        </div>
      </div>
      <div className = 'Player-options'>
        <Choices option = 'ROCK' onSelect ={handleOptionSelect}/>
        <Choices option = 'PAPER'onSelect ={handleOptionSelect}/>
        <Choices option = 'SCISSOR'onSelect ={handleOptionSelect}/>
      </div>
    </>
  )
}