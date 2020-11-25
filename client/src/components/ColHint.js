import React from 'react';

const ColHint = (props) => {
    return(
        <>
            {props.hints.map((hint, i) => hint)}
        </>
    )
}

export default ColHint;