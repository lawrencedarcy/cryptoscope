import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import './App.css';
import CandleChart from './CandleChart/CandleChart';
import ButtonBar from './ButtonBar/ButtonBar';

function App() {
  const [symbolData, setSymbolData] = useState();

  useEffect(() => {

    axios
    .get('https://api.binance.com/api/v3/klines', {
      params: {
        symbol: 'BNBBTC',
        interval: '1h',
        limit: 1000
      }
    })
    .then(function(response) {
      console.log(response.data);
      setSymbolData(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);



  return (
    <div className='App'>
      <NavBar />
      <ButtonBar />
      <div className='chart-wrapper'>
        {' '}
        <CandleChart symbolData={symbolData} />
      </div>
    </div>
  );
}

export default App;
