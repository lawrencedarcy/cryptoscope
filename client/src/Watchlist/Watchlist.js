import React from 'react';
import './Watchlist.css';
import WatchlistModule from './WatchlistModule';

function Watchlist({ currentSymbol, allSymbols, symbolData }) {
  return (
    <div className='watchlist-container'>
      <WatchlistModule
        currentSymbol={currentSymbol}
        allSymbols={allSymbols}
        symbolData={symbolData}
      />
        <WatchlistModule
        currentSymbol={currentSymbol}
        allSymbols={allSymbols}
        symbolData={symbolData}
      />
        <WatchlistModule
        currentSymbol={currentSymbol}
        allSymbols={allSymbols}
        symbolData={symbolData}
      />
       <WatchlistModule
        currentSymbol={currentSymbol}
        allSymbols={allSymbols}
        symbolData={symbolData}
      />
    </div>
  );
}

export default Watchlist;
