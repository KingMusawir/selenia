import React from 'react';

function FeatureText({ header, subheader, color }) {
  const textColorClass = `text-${color}`;
  return (
    <div>
      <h3
        className={` text-lg  md:text-4xl font-semibold mb-5 md:mb-10`}
        style={{ color }}
      >
        {header}
      </h3>
      <p className=' text-white text-[12px] md:text-[18px] mb-6 font-thin'>
        {subheader}
      </p>
    </div>
  );
}

export default FeatureText;
