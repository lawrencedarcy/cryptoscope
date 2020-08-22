import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import './App.css';
import CandleChart from './CandleChart/CandleChart';
import ButtonBar from './ButtonBar/ButtonBar';


function App() {
  const [symbolData, setSymbolData] = useState();


  function padZero(number) {
    if (number < 10) {
        number = "0" + number;
    }

    return number;
}

function unixtime2YYMMDD(unixtime) {
    var milliseconds = unixtime,
        dateObject = new Date(milliseconds),
        temp = [];

    temp.push(20 + dateObject.getFullYear().toString().slice(2));
    temp.push(padZero(dateObject.getMonth() + 1));
    temp.push(padZero(dateObject.getDate()));

    return temp.join("-");
}
 
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
      console.log('res data', response.data);
      const formattedData = response.data.map(x => ({
       time: unixtime2YYMMDD(x[0]), 
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
