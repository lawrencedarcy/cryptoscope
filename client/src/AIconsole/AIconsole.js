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
  <div className='choose-model'>Choose model: 

  <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>


AI LEVEL:

<Slider
  value={percent}
  onChange={sliderChange}
  onDone={sliderDone}
  thumbColor='#8400ffc2'
  shadowColor='#8400ff65'
  sliderPathColor='#8400ff1a'
/>
  </div>
  
  
  }
    </div>
  );
}

export default AIconsole;