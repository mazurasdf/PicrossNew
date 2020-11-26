import React from 'react';

const ColHint = (props) => {
    return(
        <>
            {props.hints.map((hint, i) => <p>{hint}</p>)}
        </>
    )
}

export default ColHint;