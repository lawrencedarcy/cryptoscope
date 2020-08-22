import React, {useState} from 'react';
import './ButtonBar.css';
import BodyButton from '../BodyButton/BodyButton';

function ButtonBar({symbolChangeHandler, currentSymbol}) {

  return (
    <div className='buttonbar-outer'>  
      <BodyButton label={'BTCGBP'} sublabel={'Bitcoin/British Pound'}  symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol}/>
      <BodyButton label={'XRPGBP'} sublabel={'XRP/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'ETHGBP'} sublabel={'Ethereum/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'BCHGBP'} sublabel={'Bitcoincash/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler} currentSymbol={currentSymbol} />
      <BodyButton label={'EOSGBP'} sublabel={'EOS/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}/>
      <BodyButton label={'LTCGBP'} sublabel={'Litecoin/British Pound'} selected={false} symbolChangeHandler={symbolChangeHandler}  currentSymbol={currentSymbol}  />
    </div>
  );
}

export default ButtonBar;