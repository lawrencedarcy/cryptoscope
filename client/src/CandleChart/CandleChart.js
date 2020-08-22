import React, { Component } from 'react';
import Chart from 'kaktana-react-lightweight-charts';



class CandleChart extends Component {
  constructor(props) {
    super(props);
 

    function padZero(number) {
      if (number < 10) {
          number = "0" + number;
      }
    
      return number;
    }
    
    function unixtime2YYMMDD(unixtime) {
      var milliseconds = unixtime,
          dateObject = new Date(milliseconds),
          temp = [];
    
      temp.push(20 + dateObject.getFullYear().toString().slice(2));
      temp.push(padZero(dateObject.getMonth() + 1));
      temp.push(padZero(dateObject.getDate()));
    
      return temp.join("-");
    }
    

    this.state = {
      options: {
        alignLabels: true,
        timeScale: {
          rightOffset: 12,
          barSpacing: 3,
          fixLeftEdge: false,
          lockVisibleTimeRangeOnResize: true,
          rightBarStaysOnScroll: true,
          borderVisible: false,
          borderColor: "#fff000",
          visible: true,
          timeVisible: true,
          secondsVisible: false,
          localization: {
            locale: 'en-US',
        },
     
       
       
        }
      },
      
      candlestickSeries: [{
        data: this.props.symbolData
      }]
    }
  }
 
  render() {
    return (
      <Chart options={this.state.options} candlestickSeries={this.state.candlestickSeries}  height={320} darkTheme  autoWidth  from={this.props.symbolData[200].time} to={ this.props.symbolData[999].time}/>
    )
  }
}

export default CandleChart;