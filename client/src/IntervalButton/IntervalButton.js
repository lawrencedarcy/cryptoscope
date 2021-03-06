import React, {useState} from 'react';
import './IntervalButton.css';


function IntervalButton({label, sublabel, symbolChangeHandler, currentSymbol, interval, intervalChangeHandler}) {

  const selected = (interval === label);

  const clickHandler = (e) => {
    e.preventDefault();
    intervalChangeHandler(e.target.value);
  }

  return (
    <button className={selected ? 'intervalbtn-outer selected' : 'intervalbtn-outer'}  onClick={clickHandler} value={label} >
      <span className='intervalbtn-label'>{label}</span>
     <span className='intervalbtn-sublabel'>{sublabel}</span>
    </button>
  );
}

export default IntervalButton;