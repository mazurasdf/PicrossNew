import React from 'react';
import Cell from './Cell';
import ColHint from './ColHint';
import RowHint from './RowHint';

const Board = (props) => {

    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        {
                            props.colHints.map((hints, i) => <td><ColHint hints={hints} /></td>)
                        }
                    </tr>
                    {
                        props.puzzleState.map((row, y) => {
                            return <tr key={y}>
                                <td><RowHint hints={props.rowHints[y]}/></td>
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