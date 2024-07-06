import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bitcoin from '../../assets/bitcoin.png';
import Vector from '../../assets/vector.png';
import CoinInfo from './CoinInfo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CoinSlick.css';

const callApi = 'https://api.coinlore.net/api/tickers/';

function CoinCard() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(callApi);

        const responseData = response.data.data;

        const filteredData = responseData.filter((coin, index) => {
          // Return true for the indices you want to keep
          return index === 0 || index === 1 || index === 2 || index === 6; // For example, keep indices 0, 1, and 3
        });

        setCoins(filteredData);
      } catch (error) {
        console.log(error);
      }
    }

    getApi();
  }, [callApi]);

  return (
    <div className=' mb-14 '>
      <Slider {...settings}>
        {coins.map((coin, index) => (
          <div key={index}>
            <CoinInfo coinData={coin} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CoinCard;
