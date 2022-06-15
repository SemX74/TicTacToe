import React,{useEffect,useState} from "react";

export const Logic = ({boardMatrixChanges,wonPlayer,setWonPlayer}) => {


    useEffect(() => {
        if(
            boardMatrixChanges[0] === 1 && boardMatrixChanges[1] === 1 && boardMatrixChanges[2] === 1 ||
            boardMatrixChanges[3] === 1 && boardMatrixChanges[4] === 1 && boardMatrixChanges[5] === 1 ||
            boardMatrixChanges[6] === 1 && boardMatrixChanges[7] === 1 && boardMatrixChanges[8] === 1 ||

            boardMatrixChanges[0] === 1 && boardMatrixChanges[3] === 1 && boardMatrixChanges[6] === 1 ||
            boardMatrixChanges[1] === 1 && boardMatrixChanges[4] === 1 && boardMatrixChanges[7] === 1 ||
            boardMatrixChanges[2] === 1 && boardMatrixChanges[5] === 1 && boardMatrixChanges[8] === 1 ||

            boardMatrixChanges[0] === 1 && boardMatrixChanges[4] === 1 && boardMatrixChanges[8] === 1 ||
            boardMatrixChanges[6] === 1 && boardMatrixChanges[4] === 1 && boardMatrixChanges[2] === 1
            )
        {
            setWonPlayer((prev) => prev = true)
        }else if(
            boardMatrixChanges[0] === 0 && boardMatrixChanges[1] === 0 && boardMatrixChanges[2] === 0 ||
            boardMatrixChanges[3] === 0 && boardMatrixChanges[4] === 0 && boardMatrixChanges[5] === 0 ||
            boardMatrixChanges[6] === 0 && boardMatrixChanges[7] === 0 && boardMatrixChanges[8] === 0 ||

            boardMatrixChanges[0] === 0 && boardMatrixChanges[3] === 0 && boardMatrixChanges[6] === 0 ||
            boardMatrixChanges[1] === 0 && boardMatrixChanges[4] === 0 && boardMatrixChanges[7] === 0 ||
            boardMatrixChanges[2] === 0 && boardMatrixChanges[5] === 0 && boardMatrixChanges[8] === 0 ||

            boardMatrixChanges[0] === 0 && boardMatrixChanges[4] === 0 && boardMatrixChanges[8] === 0 ||
            boardMatrixChanges[6] === 0 && boardMatrixChanges[4] === 0 && boardMatrixChanges[2] === 0
            )
        {
            setWonPlayer((prev) => prev = false)
        }
    },[boardMatrixChanges])


    if(wonPlayer === true){
        return(
            <h3 className="CrossWon" >Cross Won!</h3>
        )
    }
    if(wonPlayer === false){
        return(
            <h3 className="CircleWon" >Circle Won!</h3>
        )
    }
}