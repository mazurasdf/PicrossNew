import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import ColHint from './ColHint';
import RowHint from './RowHint';

const Board = (props) => {

    return(
        <>
            <table className="table">
                <tbody>
                    {
                        props.puzzleState.map((row, y) => {
                            return <tr key={y}>
                                {
                                    row.map((val, x) => {
                                        return <td key={x}>
                                            <Cell val={val} onCellClick={props.onCellClick} x={x} y={y}/>
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Board;