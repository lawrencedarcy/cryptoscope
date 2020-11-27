import React from 'react';
import './MainConsole.css';
import CandleChart from '../CandleChart/CandleChart';
import ButtonBar from '../ButtonBar/ButtonBar';
import Intervals from '../Intervals/Intervals';
import AIconsole from '../AIconsole/AIconsole';

function MainConsole({
  symbolChangeHandler,
  currentSymbol,
  allSymbols,
  symbolData,
  options,
  candlestickSeries,
  intervalChangeHandler,
  interval,
}) {
  return (
    <div className='main-console-wrapper'>
      <ButtonBar
        symbolChangeHandler={symbolChangeHandler}
        currentSymbol={currentSymbol}
        allSymbols={allSymbols}
      />
      <div className='chart-wrapper'>
        {' '}
        {symbolData && (
          <CandleChart
            symbolData={symbolData}
            options={options}
            candlestickSeries={candlestickSeries}
          />
        )}
      </div>
      <div className='chart-wrapper'>
        <Intervals
          intervalChangeHandler={intervalChangeHandler}
          interval={interval}
        />
        <AIconsole />
      </div>
    </div>
  );
}

export default MainConsole;
