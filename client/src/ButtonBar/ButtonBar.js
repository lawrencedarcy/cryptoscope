import React from 'react';
import './ButtonBar.css';
import BodyButton from '../BodyButton/BodyButton';

function ButtonBar({symbolChangeHandler, currentSymbol, allSymbols}) {

  return (
    <div className='buttonbar-outer'>
    <BodyButton label={'BTCUSDT'} sublabel={'Bitcoin/Tether'}  symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol}/>
      <BodyButton label={'ETHUSDT'} sublabel={'Ethereum/Tether'} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'ETHBTC'} sublabel={'Ethereum/Bitcoin'} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'XRPBTC'} sublabel={'XRP/Bitcoin'} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'LTCBTC'} sublabel={'Litecoin/Bitcoin'} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}/>
      <BodyButton label={'LTCETH'} sublabel={'Ethereum/Litecoin'} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}  />
      {allSymbols.map(x => (
        <BodyButton key={x.symbol} label={x.symbol} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol}/>

      ))}


    </div>
  );
}

export default ButtonBar;