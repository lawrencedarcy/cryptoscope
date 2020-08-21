import React, { Component } from 'react';
import Chart from 'kaktana-react-lightweight-charts';



class CandleChart extends Component {
  constructor(props) {
    super(props);
 

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
      <Chart options={this.state.options} candlestickSeries={this.state.candlestickSeries} autoWidth height={320} darkTheme />
    )
  }
}

export default CandleChart;