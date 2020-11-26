import React from 'react';

const RowHint = (props) => {
    return(
        <>
            {props.hints.map((hint, i) => hint + " ")}
        </>
    )
}

export default RowHint;