import React from 'react';
import './BodyButton.css';


function BodyButton({label}) {
  return (
    <div className='button-outer '>
     <div>{label}</div>
    
    </div>
  );
}

export default BodyButton;