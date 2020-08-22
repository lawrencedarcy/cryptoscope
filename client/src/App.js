import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import './App.css';
import CandleChart from './CandleChart/CandleChart';
import ButtonBar from './ButtonBar/ButtonBar';



function App() {
  const [symbolData, setSymbolData] = useState();
  const [currentSymbol, setCurrentSymbol] = useState('BTCGBP');
  const [options, setOptions] = useState({
    alignLabels: true,
    timeScale: {
      rightOffset: 12,
      barSpacing: 3,
      fixLeftEdge: false,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      borderVisible: false,
      borderColor: "#fff000",
      visible: true,
      timeVisible: true,
      secondsVisible: false,
    }});
  const candlestickSeries= [{
    data: symbolData
  }];



  const symbolChangeHandler = (symbol) => {
    setCurrentSymbol(symbol);
    getDataFromApi();
  }

const getDataFromApi = () => {
  axios
  .get('https://api.binance.com/api/v3/klines', {
    params: {
      symbol: currentSymbol,
      interval: '1h',
      limit: 1000
    }
  })
  .then(function(response) {
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
}


  useEffect(() => {
    getDataFromApi();
  }, []);



  return (
    <div className='App'>
      <NavBar />
      <ButtonBar symbolChangeHandler={symbolChangeHandler}/>
      <div className='chart-wrapper'>
        {' '}
        {symbolData && 
                  <CandleChart symbolData={symbolData}  options={options} candlestickSeries={candlestickSeries} />

        }
      </div>
    </div>
  );
}

export default App;
