import React, { Component } from 'react';
import Chart from 'kaktana-react-lightweight-charts';



function CandleChart({options, candlestickSeries, symbolData}) {
  return (
    <Chart options={options} candlestickSeries={candlestickSeries}  height={320} darkTheme  autoWidth  from={symbolData[200].time} to={ symbolData[999].time}/>

  );
}

export default CandleChart;


