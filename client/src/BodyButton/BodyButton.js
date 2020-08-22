import React from 'react';
import './BodyButton.css';


function BodyButton({label, sublabel, symbolChangeHandler}) {

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    symbolChangeHandler(e.target.value);
  }

  return (
    <button className='button-outer' onClick={clickHandler} value={label} >
     {label}
     <span className='button-sublabel'>{sublabel}</span>
    </button>
  );
}

export default BodyButton;