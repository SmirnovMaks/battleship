import React, { useState } from 'react';

import Cell from '../Ceil/Ceil';

import style from './style.module.css';

const Board = ({ field, onClickCell }) => {
  const board = new Array(10).fill(new Array(10).fill(<></>));

  const isShipCeil = (x, y) => field[x][y] === 'X';

  return (
    <div className={style.board}>
      {board.map((row, x) => (
        <div className={style.row} key={x}>
          {row.map((ceil, y) => (
            <Cell key={`${x}-${y}`} onClickCell={onClickCell} onClick={() => onClickCell(x, y)} isShip={isShipCeil(x, y)}></Cell>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
