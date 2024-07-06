import React from 'react';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { TbBrandTwitterFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Footer() {
  const item1 = [
    { content: 'COMPANY', special: true },
    { content: 'Home', special: false },
    { content: 'Features', special: false },
    { content: 'About Us', special: false },
    { content: 'Our Team', special: false },
  ];
  const item2 = [
    { content: 'SERVICES', special: true },
    { content: 'Create wallet', special: false },
    { content: 'Buy airtime', special: false },
    { content: 'Deposit money', special: false },
    { content: 'Bill payment', special: false },
    { content: 'Trade Crypto', special: false },
  ];
  const item3 = [
    { content: 'CONTACT', special: true },
    { content: 'Contact Us', special: false },
    { content: 'FAQs', special: false },
    { content: 'Helpline', special: false },
  ];

  return (
    <div>
      <div className='bg-[#00ffa228] pb-2 '>
        <div className='max-w-screen-maxws mx-auto  md:max-w-screen-md lg:max-w-screen-xl pt-10 flex justify-between'>
          <div className=' flex flex-col gap-20'>
            <p className=' font-bold text-[24px] text-primary'>Selenia</p>
            <div className=' flex gap-3'>
              <RiFacebookCircleFill fill='white' />
              <FaInstagram fill='white' />
              <RiLinkedinFill fill='white' />
              <TbBrandTwitterFilled color='white' />
            </div>
          </div>
          <FooterList items={item1} />
          <FooterList items={item2} />
          <FooterList items={item3} />
        </div>
      </div>
    </div>
  );
}
function FooterList({ items }) {
  return (
    <div>
      <ul className=' list-none flex flex-col gap-4 '>
        {items.map((item, index) => (
          <Link
            key={index}
            className={`text-[10px] md:text-[16px]  ${
              index === 0 ? ' font-bold text-white' : 'font-light text-white'
            } hover:text-primary`}
          >
            {item.content}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
