import React from 'react';
import NavBar from './NavBar/NavBar';
import './App.css';
import CandleChart from './CandleChart/CandleChart';

function App() {
  return (
    <div className="App">
      <NavBar />
    
     <div className='chart-wrapper'> <CandleChart />
    </div></div>
  );
}

export default App;
