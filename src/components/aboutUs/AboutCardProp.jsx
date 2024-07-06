import React from 'react';

function AboutCardProp() {
  return (
    <div>
      <div className=' inline-block '>
        <div className=' flex flex-col gap-5 md:gap-10  bg-[#161D1A] rounded-xl text-white text-left'>
          <h2 className=' text-[24px] font-semibold pt-6 lg:pt-12 px-10 lg:px-20'>
            SEND AND RECIEVE CRYTOCURRENCIES
          </h2>
          <div className=' border-2 border-solid border-white'></div>
          <p className=' pb-6 lg:pb-12 px-10 lg:px-20'>
            With Selenia, users can easily send and receive cryptocurrency by
            simply using their mobile number linked to their wallet address.
            This eliminates the need for typing out long and complicated wallet
            addresses, making transactions quick and hassle-free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCardProp;
