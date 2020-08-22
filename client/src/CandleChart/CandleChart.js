import React, { Component } from 'react';
import Chart from 'kaktana-react-lightweight-charts';



class CandleChart extends Component {
  constructor(props) {
    super(props);
 
    console.log('FROM', this.props.symbolData[0].close)

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
          timeVisible: false,
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
      <Chart options={this.state.options} candlestickSeries={this.state.candlestickSeries}  height={320} darkTheme  autoWidth  from={ this.props.symbolData[0].time} to={ this.props.symbolData[999].time}/>
    )
  }
}

export default CandleChart;