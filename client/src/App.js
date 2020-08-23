import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import './App.css';
import CandleChart from './CandleChart/CandleChart';
import ButtonBar from './ButtonBar/ButtonBar';
import Intervals from './Intervals/Intervals';


function App() {
  const [symbolData, setSymbolData] = useState();
  const [currentSymbol, setCurrentSymbol] = useState('BTCUSDT');
  const [allSymbols, setAllSymbols] = useState([]);
  const [interval, setInterval] = useState('1h');
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

    const [candlestickSeries, setCandleStickSeries] = useState([{
      data: []
    }]);


  const symbolChangeHandler = (symbol) => {
    setCurrentSymbol(symbol); 
    getDataFromApi(symbol, interval);
  }

  const intervalChangeHandler = (interval) => {
    console.log(interval);
    setInterval(interval);
    getDataFromApi(currentSymbol, interval);
  }

const getDataFromApi = (symbol, interval) => {
  axios
  .get('https://api.binance.com/api/v3/klines', {
    params: {
      symbol: symbol || currentSymbol,
      interval: interval,
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
    setCandleStickSeries([{
      data: formattedData
    }]);
    console.log('formattedData', formattedData);
  })
  .catch(function(error) {
    console.log(error);
  });
}

const getAllSymbolData = () => {
  axios
  .get('https://api.binance.com/api/v3/exchangeInfo')
  .then(function(response) {
    console.log(response.data.symbols);
    setAllSymbols(response.data.symbols);
  })
  .catch(function(error) {
    console.log(error);
  });
}

  useEffect(() => {
    getDataFromApi('BTCUSDT', '1h');
    getAllSymbolData();
  }, []);



  return (
    <div className='App'>
      <NavBar />
      <ButtonBar symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} allSymbols={allSymbols}/>
      <div className='chart-wrapper'>
        {' '}
        {symbolData && 
                  <CandleChart symbolData={symbolData} options={options} candlestickSeries={candlestickSeries} />

        }
      </div>
      <div className='chart-wrapper'>
      <Intervals intervalChangeHandler={intervalChangeHandler} interval={interval}/>
      </div>
    
    </div>
  );
}

export default App;
