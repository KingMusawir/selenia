import React from 'react';
import FeatureText from './FeatureText';
import GetseleniaBtn from './GetseleniaBtn';
import Featureimg from './Featureimg';
import Wallet1 from '../../assets/wallet1.png';
import Wallet2 from '../../assets/wallet2.png';
import Paybills from '../../assets/paybills.png';

function Features() {
  return (
    <div>
      <div className=' flex gap-5 md:gap-24 lg:gap-32 items-center  mb-20 md:mb-14'>
        <div className='max-w-[11rem] md:max-w-none'>
          <FeatureText
            header='Your phone number is your wallet address'
            subheader='Create account on Selenia and have your phone number as your wallet
        address. Remember your wallet address easily'
            color='white'
          />
          <GetseleniaBtn />
        </div>
        <div>
          <Featureimg image={Wallet1} isActiveRight={true} />
        </div>
      </div>

      <div className=' flex gap-5 md:gap-24 lg:gap-32 items-center mb-20 md:mb-14'>
        <div className=' max-w-[11rem] md:max-w-none'>
          <Featureimg image={Wallet2} isActiveLeft />
        </div>
        <div>
          <FeatureText
            header='Buy coins on selenia using various payment method'
            subheader='Deposit money (BTC, ETH and Stable coins) in your selenia account '
            color='#00FFA3'
          />
          <GetseleniaBtn />
        </div>
      </div>

      <div className=' flex gap-5 md:gap-24 lg:gap-32 gap items-center  mb-20 md:mb-14'>
        <div className='max-w-[11rem] md:max-w-none'>
          <FeatureText
            header='Buy airtime and pay bills with cryptocurrency'
            subheader='Buy airtime, data and pay utility bills connveniently using cryptocurrency'
            color='white'
          />
          <GetseleniaBtn />
        </div>
        <div>
          <Featureimg image={Paybills} isActiveRight={true} />
        </div>
      </div>
    </div>
  );
}

export default Features;
