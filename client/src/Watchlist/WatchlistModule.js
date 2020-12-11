import React from 'react';
import CandleChart from '../CandleChart/CandleChart';
import Chart from 'kaktana-react-lightweight-charts';

function WatchlistModule({ symbolData, options, candlestickSeries }) {
  return (
    <div >
    
      {symbolData && (
      
        <CandleChart
          symbolData={symbolData}
          options={options}
          candlestickSeries={candlestickSeries}
        />
     
      )}
    </div>
  );
}

export default WatchlistModule;
