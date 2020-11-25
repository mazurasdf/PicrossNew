import React from 'react';

const Cell = (props) => {
    //for now, val === 0 means empty
    //val === 1 means filled

    return(
        <div onClick={(e) => props.onCellClick(e, props.x, props.y)}>
            {props.val === 0 ? "_" : "x"}
        </div>
    )
}

export default Cell;