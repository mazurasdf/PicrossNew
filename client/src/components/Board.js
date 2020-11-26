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
                            props.colHints.map((hints, i) => <td className="hintcol"><ColHint hints={hints} /></td>)
                        }
                    </tr>
                    {
                        props.puzzleState.map((row, y) => {
                            return <tr key={y}>
                                <td className="hintrow"><RowHint hints={props.rowHints[y]}/></td>
                                {
                                    row.map((val, x) => {
                                        return <td onClick={(e) => {props.onCellClick(e, x, y)}} className="square" key={x}>
                                            <Cell val={val}/>
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