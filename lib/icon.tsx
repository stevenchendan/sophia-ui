import React from 'react';
import bitcoin from './icons/bitcoin.svg';
import wechat from './icons/wechat.svg';

interface IconProps {
  name: string;
}

console.log(wechat);
console.log(bitcoin);


const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref="#bitcoin"></use>
      </svg>
      <svg>
        <use xlinkHref="#wechat"></use>
      </svg>
    </span>
  )
}

export default Icon;