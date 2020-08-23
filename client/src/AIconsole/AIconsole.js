import React, {useState} from 'react';
import './AIconsole.css';



function AIconsole(props) {

const [consoleSwitch, setConsoleSwitch] = useState(false);


  return (
    <div className={consoleSwitch && 'console-outer'}>

  <button className='console-switch cyber-button' onClick={() => setConsoleSwitch(!consoleSwitch)} > {consoleSwitch ? 'DISABLE AI CONSOLE' : 'ACTIVATE AI CONSOLE' }</button>
    </div>
  );
}

export default AIconsole;