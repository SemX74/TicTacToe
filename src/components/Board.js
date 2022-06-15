import React,{useState, useEffect} from "react";
import './Cell.css'
import './Board.css'

import Cell from "./Cell";
import { Logic } from "./Logic";

export default function Board(){

    const [wonPlayer,setWonPlayer] = useState(null);

    const [boardMatrixChanges,setBoardMatrixChanges] = useState([
        null, null, null, null, null, null, null, null, null,
    ])

    const [changeTurn, setChangeTurn] = useState(true);
    const handleTurn = () => {
        setChangeTurn((prev) => !prev? true : false)
    }

    const handleClick = (ID,handleTurn) => {
        const newMatrix = (boardMatrixChanges.map((item,index) => 
        {
            if ( item === null && index === ID && changeTurn ){handleTurn();return 0;}
            else if (item === null && index === ID  && !changeTurn){handleTurn();return 1;}
            else{return item;}
        }))
        setBoardMatrixChanges(newMatrix);
    };

    const handleReset = () =>{
        setBoardMatrixChanges([
            null, null, null, null, null, null, null, null, null,
        ]);
        setWonPlayer(null)
    }
    return(
        <div className="body">
            <div className="Board_wrapper">
                <div className="Board">
                    {boardMatrixChanges.map((item,id) => 
                    <Cell
                    className='Cell'
                    key={id}
                    onClick={() =>{ handleClick(id,handleTurn)}}
                    item={item}
                    /> )}
                </div>
                
                 <Logic boardMatrixChanges={boardMatrixChanges} wonPlayer={wonPlayer} setWonPlayer={setWonPlayer}/>
            </div>
            <h1 className='reset' onClick={handleReset}>Reset!</h1>
        </div>
    )
}