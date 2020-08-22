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
        symbol: 'XRPGBP',
        interval: '1h',
        limit: 1000
      }
    })
    .then(function(response) {
      console.log('res data', response.data);
      const formattedData = response.data.map(x => ({
       time: x[0]/1000, 
        open: x[1], 
        high: x[2], 
        low: x[3], 
        close: x[4] }),
     )
      setSymbolData(formattedData);
      console.log('formattedData', formattedData);
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
        {symbolData && 
                  <CandleChart symbolData={symbolData && symbolData}  name={'hi'}/>

        }
      </div>
    </div>
  );
}

export default App;
