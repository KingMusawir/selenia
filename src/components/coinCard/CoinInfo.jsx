import React from 'react';
import Bitcoin from '../../assets/bitcoin.png';
import Etherum from '../../assets/etherum.png';
import Usdt from '../../assets/usdt.png';
import Usdc from '../../assets/usd.png';
import Vector from '../../assets/vector.png';

function CoinInfo({ coinData }) {
  const formattedNumber = coinData.market_cap_usd.slice(0, 5);
  const totalVolume =
    formattedNumber.slice(0, 3) + ',' + formattedNumber.slice(2);

  const coinLogo = {
    btc: Bitcoin,
    eth: Etherum,
    usdt: Usdt,
    usdc: Usdc,
  };
  const coinImageSrc = coinLogo[coinData.symbol.toLowerCase()];
  return (
    <div className=' mb-5'>
      <div className=' p-6 inline-block  bg-[#212D21] border-solid border-2 border-[#00ffa22e] rounded-lg'>
        <div className=' flex gap-14 items-center '>
          <div className=' flex items-center gap-2'>
            <img
              src={coinImageSrc}
              alt={`${coinData.symbol} logo`}
              className=' w-10'
            />
            <p className=' text-white'>{coinData.symbol}</p>
          </div>

          <p className=' text-[#00FFA3] bg-[#00ffa22e] py-2 px-6 rounded-2xl text-[10px]'>
            {coinData.percent_change_24h}%
          </p>
        </div>
        <div className=' block border-solid border-b-2 border-[#00ffa22e] mt-2 mb-2 '></div>
        <div className=' flex gap-6 items-center '>
          <div className=' flex flex-col gap-2'>
            <p className=' text-white text-[20px]'>{coinData.price_usd}</p>
            <p className=' text-[#DFDFDF] text-[14px]'>${totalVolume} B</p>
          </div>
          <img src={Vector} alt='' className=' w-24' />
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;
