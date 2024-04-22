import React, { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as CrossIcon } from './cross.svg';
import { ReactComponent as SquareIcon } from './square.svg';

import style from './style.module.css';

const Cell = ({ isShip, onClick }) => {
  const [offended, setOffended] = useState(false);

  return (
    <div
      className={style.cell}
      onClick={() => {
        if (offended) return;
        setOffended(true);
        onClick();
      }}
    >
      <SquareIcon className={cn(style.square, { [style.offended]: offended && !isShip })}></SquareIcon>
      {offended && isShip && <CrossIcon className={style.cross} />}
    </div>
  );
};

export default Cell;
