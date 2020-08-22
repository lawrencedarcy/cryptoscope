import React from 'react';
import './ButtonBar.css';
import BodyButton from '../BodyButton/BodyButton';

function ButtonBar({symbolChangeHandler}) {
  return (
    <div className='buttonbar-outer'>  
      <BodyButton label={'BTCGBP'} sublabel={'Bitcoin/British Pound'} symbolChangeHandler={symbolChangeHandler}/>
      <BodyButton label={'XRPGBP'} sublabel={'XRP/British Pound'} symbolChangeHandler={symbolChangeHandler}/>
      <BodyButton label={'ETHGBP'} sublabel={'Ethereum/British Pound'} symbolChangeHandler={symbolChangeHandler}/>
      <BodyButton label={'BCHGBP'} sublabel={'Bitcoincash/British Pound'} symbolChangeHandler={symbolChangeHandler}/>
      <BodyButton label={'EOSGBP'} sublabel={'EOS/British Pound'} symbolChangeHandler={symbolChangeHandler}/>
      <BodyButton label={'LTCGBP'} sublabel={'Litecoin/British Pound'} symbolChangeHandler={symbolChangeHandler}/>
    </div>
  );
}

export default ButtonBar;