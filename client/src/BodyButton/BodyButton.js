import React from 'react';
import './BodyButton.css';


function BodyButton({label, sublabel}) {
  return (
    <div className='button-outer '>
     <div>{label}</div>
     <div className='button-sublabel'>{sublabel}</div>
    </div>
  );
}

export default BodyButton;