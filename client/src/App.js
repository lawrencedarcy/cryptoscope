import React from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import './App.css';
import CandleChart from './CandleChart/CandleChart';
import ButtonBar from './ButtonBar/ButtonBar'

function App() {

  axios.get('https://api.binance.com/api/v3/klines?symbol=BNBBTC&interval=1h&limit=1000', {
    params: {
      symbol: 'BNBBTC',
      interval: 1,
      limit: 1000
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div className="App">
      <NavBar />
    <ButtonBar />
     <div className='chart-wrapper'> <CandleChart />
    </div></div>
  );
}

export default App;
