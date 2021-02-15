import React from 'react';
import bitcoin from './icons/bitcoin.svg';
import wechat from './icons/wechat.svg';
import print from './icons/print.svg';
import twitter from './icons/twitter.svg';

interface IconProps {
  name: string;
}

console.log(wechat);
console.log(bitcoin);
console.log(print);
console.log(twitter);


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