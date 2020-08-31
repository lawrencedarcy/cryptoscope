import React from 'react';
import './Intervals.css';
import IntervalButton from '../IntervalButton/IntervalButton';

function Intervals({ interval, intervalChangeHandler }) {
  const intervals = [
    '1m',
    '3m',
    '5m',
    '30m',
    '1h',
    '2h',
    '4h',
    '6h',
    '8h',
    '12h',
    '1d',
    '3d',
    '1M'
  ];

  return (
    <div>
          <div className='interval-subbar'>Time range</div>

    <div className='intervals'>
      {intervals.map(x => (
        <IntervalButton
          label={x}
          interval={interval}
          intervalChangeHandler={intervalChangeHandler}
        />
      ))}
    </div>
    </div>
  );
}

export default Intervals;
