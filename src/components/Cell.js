import React from "react";

export default function Cell (props){

    const item = props.item;
    const styles = (item) => {
        if(item === null){
            return ('l')
        }
        if(item === 1){
            return('cross')
        }
        if(item === 0){
            return('circle')
        }
    }
    return(
        <div
        id={props.id}
        onClick={props.onClick}
        className='Cell'><div className={styles(item)}></div></div>
        
    )
}