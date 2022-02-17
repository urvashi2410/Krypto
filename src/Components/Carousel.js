import { Link, makeStyles } from '@material-ui/core';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import React, {useEffect, useState } from 'react'
import { TrendingCoin } from '../Config/api';

const Carousel = () => {
    const [trending, settrending] = useState([]),
    useStyles = makeStyles({
        Carousel: {
          height: '50%',
          display: 'flex',
          alignItems: 'center',
        },
      });

      const classes = useStyles();

      const fetchData = async() => {
          const {data} = await axios.get(TrendingCoin('inr'));
          settrending(data);
      }

      const items = trending.map((coin) => {
          let profit = coin.price_change_percentage_24h >= 0;
          return (
              <Link to={`/coin/${coin.id}`}>
                  <img src={coin.image} alt = {coin.name} height='80' style={{marginBottom:10}} />
                  <span>{coin.symbol}</span>
                  <span>{profit && "+"}{coin.price_change_percentage_24h.toFixed(2)}</span>
                  <span>{coin.current_price}</span>
              </Link>
          );
      });

      useEffect(() => {
          fetchData();
      }, [])
      
  return (
    <div className={classes.Carousel}>
        <AliceCarousel infinite autoPlayInterval={1000} animationDuration={1500} mouseTracking items={items} />
    </div>
  )
}

export default Carousel