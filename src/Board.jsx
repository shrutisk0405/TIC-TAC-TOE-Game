
import React, { useState } from 'react';
import Sqaure from './Sqaure.jsx';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    // console.log('State',state);
    const [isXTurn,setIsXTurn] =useState(true);

    const checkWinner =() =>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic){
            const [a , b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
        }
        return false;
    };
    const isWinner=checkWinner();

    const isTie = () => {
        return state.every((square) => square !== null) && !checkWinner();
    };

                                          
    const handleClick =(index) =>{ 
        if(state[index] !== null){
            return;
        }
         console.log("clicked on index",index);
        const copyState = [...state];
        copyState[index] =isXTurn ? "X":"O";
       setState(copyState);
       setIsXTurn(!isXTurn);
    };
    const handleReset = () =>{
        setState(Array(9).fill(null));
    };
  return (
    <div className="board-container" style={{
        boxShadow: "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",
    }}>
        {isWinner ?  (
        <> <h4>{isWinner} won </h4> <div className="btn"><button className="Playagain" onClick={handleReset}>Play Again</button></div></> 
        ) : isTie() ? (
            <>
                <h4>It's a tie!</h4>
                <div className="btn"><button className="Playagain" onClick={handleReset}>Play Again</button></div>
            </>
        ) : (
        <>
        <h4> Player {isXTurn ? "X":"O"} Turn</h4>
        <div className="board-row">
            <Sqaure onClick={() => handleClick(0)} value={state[0]}/>
            <Sqaure onClick={() => handleClick(1)}value={state[1]}/>
            <Sqaure onClick={() => handleClick(2)} value={state[2]}/>
        </div>
        <div className="board-row">
            <Sqaure onClick={() => handleClick(3)} value={state[3]}/>
            <Sqaure onClick={() => handleClick(4)} value={state[4]}/>
            <Sqaure onClick={() => handleClick(5)} value={state[5]}/>
        </div>
            
        <div className="board-row">
            <Sqaure onClick={() => handleClick(6)} value={state[6]}/>
            <Sqaure onClick={() => handleClick(7)} value={state[7]}/>
            <Sqaure onClick={() => handleClick(8)} value={state[8]}/>
        </div>
        </>
        )}
    </div>
    );
};

export default Board;