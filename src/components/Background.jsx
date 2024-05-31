import React from 'react';
import background from '../image/backgrouond.png';

function Background(type) {
  return (
    <div className="absolute w-screen h-screen flex -z-10">
      <img
        className="w-screen h-screen flex"
        src={background}
        alt="background"
      />
      {type !== 'main' && (
        <div className="flex fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-60 z-10"></div>
      )}
    </div>
  );
}

export default Background;
