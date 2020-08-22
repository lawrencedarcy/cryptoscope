import React from 'react';
import './ButtonBar.css';
import BodyButton from '../BodyButton/BodyButton';

function ButtonBar(props) {
  return (
    <div className='buttonbar-outer'>  
      <BodyButton label={'BTCGBP'} sublabel={'Bitcoin/British Pound'}/>
      <BodyButton label={'XRPGBP'} sublabel={'XRP/British Pound'}/>
      <BodyButton label={'ETHGBP'} sublabel={'Ethereum/British Pound'}/>
      <BodyButton label={'BCHGBP'} sublabel={'Bitcoincash/British Pound'}/>
      <BodyButton label={'EOSGBP'} sublabel={'EOS/British Pound'}/>
      <BodyButton label={'LTCGBP'} sublabel={'Litecoin/British Pound'}/>
    </div>
  );
}

export default ButtonBar;