import React from 'react';

function Featureimg({ image, isActiveRight, isActiveLeft }) {
  return (
    <div
      className={`${
        isActiveRight ? 'right-image' : isActiveLeft ? 'left-image' : ''
      }`}
    >
      <img src={image} alt='' />
    </div>
  );
}

export default Featureimg;
