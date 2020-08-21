import React from 'react';
import './ButtonBar.css';
import BodyButton from '../BodyButton/BodyButton';

function ButtonBar(props) {
  return (
    <div className='buttonbar-outer'>  
      <BodyButton label={'test'} />
      <BodyButton label={'test'}/>
      <BodyButton label={'test'}/>
      <BodyButton label={'test'}/>
      <BodyButton label={'test'}/>
    </div>
  );
}

export default ButtonBar;