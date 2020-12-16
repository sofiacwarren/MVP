import React from 'react';
import '../App.css';

class Chart extends React.Component {
  constructor(props) {
    super(props)
    //sizing cells
    // this.width = 38 * 3;
    // console.log(this.width, props.columnsNC)
  }
  render() {
    const width = 38 * this.props.columnsNC;

    return <div className='chart' style={{width: `${width}px`}}>
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