import React, { useState } from 'react';
import './AIconsole.css';
import Slider from 'react-slider-simple';
import Switch from 'react-switch';

function AIconsole(props) {
  const [consoleSwitch, setConsoleSwitch] = useState(false);
  const [percent, setPercent] = useState(50);
  const handleChange = () => {
    setConsoleSwitch(state => !state)
  };

  const sliderChange = percent => {
    setPercent(percent);
  };
  const sliderDone = () => {};

  return (
    <div className={'console-outer'}>
      
        <div>
          <div className='choose-model'>
            <div className='console-header'>AI ASSISTANCE 
            
            <Switch
              onChange={handleChange}
              checked={consoleSwitch}
              onColor='#283837'
              onHandleColor='#294946'
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
              activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
              height={10}
              width={28}
              className='react-switch'
              id='material-switch'
             
            />
            </div>
           

            <div className={consoleSwitch ? 'console-outer select-label' : 'console-outer-faded select-label'} >
              CHOOSE MODEL:
              <select className='select'>
                <option value='channel up'>Channel up</option>
                <option value='channel down'>Channel down</option>
                <option value='ascending triangle'>Ascending triangle</option>
                <option value='Cup with handle'>Cup with handle</option>
                <option value='falling wedge'>Falling wedge</option>
              </select>
              <div className='slider-label'>
                <div className='slider-label-text'>MODEL CONFIDENCE LEVEL:</div>

                <Slider
                  value={percent}
                  onChange={sliderChange}
                  onDone={sliderDone}
                  thumbColor='#294946'
                  shadowColor='##1d2928'
                  sliderPathColor='#283837'
                  className='slider'
                />
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default AIconsole;
