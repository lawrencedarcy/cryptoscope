import React, {useState} from 'react';
import './ButtonBar.css';
import BodyButton from '../BodyButton/BodyButton';

function ButtonBar({symbolChangeHandler, currentSymbol, allSymbols}) {

  return (
    <div className='buttonbar-outer'>
    <BodyButton label={'BTCUSDT'} sublabel={'Bitcoin/Tether'}  symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol}/>
      <BodyButton label={'ETHUSDT'} sublabel={'Ethereum/Tether'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'ETHBTC'} sublabel={'Ethereum/Bitcoin'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'XRPBTC'} sublabel={'XRP/Bitcoin'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'LTCBTC'} sublabel={'Litecoin/Bitcoin'} selected={false} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}/>
      <BodyButton label={'LTCETH'} sublabel={'Ethereum/Litecoin'} selected={false} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}  />
      {allSymbols.map(x => (
        <BodyButton key={x.symbol} label={x.symbol} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol}/>

      ))}



      <BodyButton label={'BTCUSDT'} sublabel={'Bitcoin/Tether'}  symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol}/>
      <BodyButton label={'ETHUSDT'} sublabel={'Ethereum/Tether'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'ETHGBP'} sublabel={'Ethereum/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'BCHGBP'} sublabel={'Bitcoincash/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'EOSGBP'} sublabel={'EOS/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}/>
      <BodyButton label={'LTCGBP'} sublabel={'Litecoin/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}  />
    </div>
  );
}

export default ButtonBar;