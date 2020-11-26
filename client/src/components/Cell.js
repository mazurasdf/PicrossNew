import React from 'react';

const Cell = (props) => {
    //for now, val === 0 means empty
    //val === 1 means filled

    return(
        <div className={props.val === 0 ? "blank" : "selected"}>
        </div>
    )
}

export default Cell;