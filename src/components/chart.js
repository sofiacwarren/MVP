import React from 'react';
import '../App.css';

class Chart extends React.Component {
  constructor(props) {
    super(props)
    //sizing cells
    // this.width = 38 * props.columnsNC;
    this.width = 38 * 3;
  }

  render() {
  return <div className='chart' style={{width: `${this.width}px`}}>
    {this.props.chart.map((value, index) => {
      // console.log(index, value)
      return <div
          className='cell'
          key={index}
          onClick={() => this.props.handleCellClick(index)}>
            {value}
        </div>
    })}
  </div>
  }
}

export default Chart;