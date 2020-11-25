import React, { useEffect, useState } from 'react';
import Board from '../components/Board';

const SinglePuzzle = (props) => {
    //stand in data for axios request
    const [puzzle, setPuzzle] = useState({
        xSize: 5,
        ySize: 5,
        data: "0010100010000100111111111"
    })

    //the matrix holding the answer
    const [truePuzzle, setTruePuzzle] = useState([]);
    //the matrix holding the current state of the game
    const [puzzleState, setPuzzleState] = useState([]);

    useEffect(() => {
        let blankArr = [];
        for(let i = 0; i < puzzle.ySize; ++i){
            blankArr.push([]);
            for(let j = 0; j < puzzle.xSize; ++j){
                blankArr[i].push(0);
            }
        }
        setPuzzleState(blankArr);

        let trueArr = [];
        for(let i = 0; i < puzzle.ySize; ++i){
            trueArr.push([]);
            for(let j = 0; j < puzzle.xSize; ++j){
                trueArr[i].push(puzzle.data[(i * puzzle.ySize) + j]);
            }
        }
        setTruePuzzle(trueArr);
    }, [props, puzzle])

    const onCellClick = (e, x, y) => {
        e.preventDefault();

        let newRow = puzzleState[y];
        if(newRow[x] === 0){
            newRow[x] = 1;
        }
        else{
            newRow[x] = 0;
        }

        setPuzzleState([
            ...puzzleState.slice(0, y),
            newRow,
            ...puzzleState.slice(y + 1)
        ]);
    }

    return(
        <>
            <Board puzzleState={puzzleState} onCellClick={onCellClick}/>
        </>
    )
}

export default SinglePuzzle;