import React from 'react';
import './icons/bitcoin.svg';
import './icons/wechat.svg';
import './icons/print.svg';
import './icons/twitter.svg';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  console.log(props);
  
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  )
}

export default Icon;