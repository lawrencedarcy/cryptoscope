import React from 'react';
import NavBar from './NavBar/NavBar';
import './App.css';
import CandleChart from './CandleChart/CandleChart';
import ButtonBar from './ButtonBar/ButtonBar'

function App() {
  return (
    <div className="App">
      <NavBar />
    <ButtonBar />
     <div className='chart-wrapper'> <CandleChart />
    </div></div>
  );
}

export default App;
