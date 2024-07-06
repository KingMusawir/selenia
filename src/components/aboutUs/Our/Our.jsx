import React, { useEffect, useState } from 'react';
import Ourheader from './Ourheader';
import OurValue from './OurValue';
import LightDiv from './LightDiv';

function Our() {
  const [showFullText, setShowFullText] = useState(false);
  const toggleFullText = () => setShowFullText(!showFullText);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowFullText(true);
      } else setShowFullText(false);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <div className='max-w-screen-maxws mx-auto  md:max-w-screen-sm lg:max-w-screen-xl'>
        <div className=' pt-14'>
          <Ourheader title='OUR HISTORY' />
          <div className='inline-block pb-5'>
            <div className=' p-6 md:p-8 rounded-tr-[4rem] rounded-bl-[4rem] bg-[#212D21] border border-[#00ffa25d]'>
              <p className='text-white text-[12px] md:text-[18px] lg:text-[24px] text-center md:text-justify'>
                {showFullText ? (
                  'In 2022, Selenia was established by a team of forward-thinking entrepreneurs who envisioned the potential for cryptocurrency to transform the financial landscape in Africa. Recognizing the numerous obstacles faced by the African population, they were determined to create a solution that would give individuals greater control over their finances. With their unwavering commitment, they founded Selenia with the goal of empowering the people of Africa through financial inclusiveness. Today, Selenia’s aim is to help bridge the gap between traditional banking and the world of cryptocurrency, making it possible for millions of Africans to take control of their financial futures. With its innovative approach, the company will set the standard for web3 platforms in Africa, and its mission to empower people through cryptocurrency will be as strong as ever.'
                ) : (
                  <>
                    In 2022, Selenia was established by a team of
                    forward-thinking entrepreneurs who envisioned the potential
                    for cryptocurrency to transform the financial landscape in
                    Africa. Recognizing the numerous obstacles faced by the
                    African population, they were determined to create a
                    solution that would give individuals greater control over
                    their finances. With their unwavering commitment, they
                    founded Selenia with the goal of empowering the people of
                    Africa through financial inclusiveness.
                    <span
                      className=' text-[#00ffa3] text-center'
                      onClick={toggleFullText}
                    >
                      <br />
                      Read More...
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className=' grid grid-cols-4 lg:grid-cols-3 gap-5 items-center'>
          <LightDiv />
          <div className=' py-4 grid grid-cols-1 col-span-3 md:col-span-2'>
            <div className=' justify-self-end'>
              <Ourheader title='OUR MISSION' />
            </div>
            <div className='inline-block pb-5'>
              <div className=' p-6 md:p-8 rounded-tr-[2rem] md:rounded-tr-[4rem] rounded-bl-[2rem] md:rounded-bl-[4rem] bg-[#212D21] border border-[#00ffa25d]'>
                <p className='text-white text-[12px] md:text-[18px] lg:text-[24px] text-center md:text-justify'>
                  To empower the African population by providing a seamless and
                  secure web3 platform that allows for effortless banking
                  transactions using cryptocurrency.  We believe in bridging the
                  gap between traditional banking and the world of
                  cryptocurrency, and we strive to make it accessible to
                  Africans through our innovative mobile-first approach.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=' grid grid-cols-4 lg:grid-cols-3 gap-10 items-center'>
          <div className=' py-4 grid grid-cols-1 col-span-3 md:col-span-2'>
            <div className=' justify-self-star'>
              <Ourheader title='OUR VISION' />
            </div>
            <div className='inline-block pb-5'>
              <div className=' p-6 md:p-8 rounded-tl-[2rem] md:rounded-tl-[4rem] rounded-br-[2rem] md:rounded-br-[4rem] bg-[#212D21] border border-[#00ffa25d]'>
                <p className='text-white text-[12px] md:text-[18px] lg:text-[24px] text-center md:text-justify'>
                  To revolutionize financial transactions in Africa by providing
                  accessible and secure web3 banking services using
                  cryptocurrency.
                </p>
              </div>
            </div>
          </div>
          <LightDiv />
        </div>

        <div className=' grid grid-cols-4 lg:grid-cols-3 gap-10 items-center pb-10'>
          <LightDiv />
          <div className=' py-4 grid grid-cols-1 col-span-3 md:col-span-2'>
            <div className=' justify-self-end'>
              <Ourheader title='OUR GOAL' />
            </div>
            <div className='inline-block pb-5'>
              <div className=' p-6 md:p-8 rounded-tr-[2rem] md:rounded-tr-[4rem] rounded-bl-[2rem] md:rounded-bl-[4rem] bg-[#212D21] border border-[#00ffa25d]'>
                <ul className=' list-disc pl-5 md:pl-10 stroke-yellow-50 text-white text-[12px] md:text-[18px] lg:text-[24px] text-left md:text-justify'>
                  <li>
                    To provide Africans with a solution that makes financial
                    transactions easier and more efficient
                  </li>
                  <li>
                    To give Africans greater control over their own financial
                    futures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <OurValue />
      </div>
    </div>
  );
}
const StyledDiv = ({
  children,
  roundedStyles,
  contentStyle,
  positionStyle,
}) => {
  return (
    <div
      className={`inline-block p-6 md:p-8 bg-[#212D21] border border-[#00ffa25d] ${roundedStyles} ${contentStyle} ${positionStyle}`}
    >
      {children}
    </div>
  );
};

export default Our;
