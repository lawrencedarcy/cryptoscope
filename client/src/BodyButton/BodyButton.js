import React, {useState} from 'react';
import './BodyButton.css';


function BodyButton({label, sublabel, symbolChangeHandler, currentSymbol}) {

  const selected = (currentSymbol === label);

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    symbolChangeHandler(e.target.value);
  }

  return (
    <button className={selected ? 'button-outer selected' : 'button-outer'}  onClick={clickHandler} value={label} >
      <span className='button-label'>{label}</span>
     <span className='button-sublabel'>{sublabel}</span>
    </button>
  );
}

export default BodyButton;