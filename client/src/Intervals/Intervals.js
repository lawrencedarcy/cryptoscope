import React from 'react';
import './Intervals.css';
import IntervalButton from '../IntervalButton/IntervalButton';

function Intervals(props) {

  const intervals = ['1 min', '5 mins', '15 mins', '30 mins', '1 hour', '4 hours', '1 day', '1 week', '1 month'];

  return (
    <div className='intervals'>

      {intervals.map(x => (
      <IntervalButton label={x} />
      ))}
    </div>
  );
}

export default Intervals;