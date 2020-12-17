import React from 'react';
import '../App.css';

class Chart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const width = 38 * (this.props.columnsNC);

    return <div className='chart' style={{width: `${width}px`}}>
    {this.props.chart.map((value, index) => {
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