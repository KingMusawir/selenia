import React from 'react';

function Ourheader({ title }) {
  return (
    <div>
      <div className=' flex items-center gap-2 text-[24px] md:text-[40px] text-[#00ffa3] font-semibold pb-2'>
        <div className=' w-7 md:w-10 h-7 md:h-10 rounded-full bg-gradient-to-r from-[#00C566] to-[#00FFA3]'></div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Ourheader;
