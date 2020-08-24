import React, {useState} from 'react';
import './AIconsole.css';
import Slider from 'react-slider-simple';



function AIconsole(props) {

const [consoleSwitch, setConsoleSwitch] = useState(false);
const [percent, setPercent ]= useState(50);

const sliderChange = (percent) => {
  setPercent(percent);
};
const sliderDone = () => {};

  return (
    <div className={consoleSwitch && 'console-outer'}>

  <button className='console-switch cyber-button' onClick={() => setConsoleSwitch(!consoleSwitch)} > {consoleSwitch ? 'DISABLE AI' : 'ACTIVATE AI' }</button>


{consoleSwitch &&
  <div className='choose-model'>
    <div className='select-label'>
    CHOOSE MODEL: 

  <select name="cars" id="cars" className='select'>
 
  <option value="channel up">Channel up</option>
  <option value="channel down">Channel down</option>
  <option value="ascending triangle">Ascending triangle</option>
  <option value="Cup with handle">Cup with handle</option>
  <option value="falling wedge">Falling wedge</option>

</select>

<div className='slider-label'>
<div className='slider-label-text'>MODEL CONFIDENCE LEVEL:</div>

<Slider
  value={percent}
  onChange={sliderChange}
  onDone={sliderDone}
  thumbColor='#8400ffc2'
  shadowColor='#8400ff65'
  sliderPathColor='#8400ff1a'
  className='slider'
/>
</div>
  </div>
  </div>

  
  
  }
    </div>
  );
}

export default AIconsole;