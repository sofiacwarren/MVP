import React from 'react';
import './App.css';
import Chart from './components/chart.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stitchSelection: 'k',
      // chart: ['k','','','','','','','',''],
      chart: [],
      changedChart: [],
      rowsNC: '',
      columnsNC: ''
    }
    //binding
    this.handleNewClick = this.handleNewClick.bind(this);
  }

  //event handling
  handleNewClick() {
    const rows = window.prompt('How many rows?');
    const columns = window.prompt('How many stitches wide?');
    this.setState({rowsNC: rows, columnsNC: columns, chart: Array(rows * columns).fill('')});
  }

  handleCellClick(index) {
    //handle stitch selection for cell
    console.log('clickclickclick', index);
    let chart = this.state.chart;
    chart[index] = this.state.stitchSelection
    this.setState(chart);
  }

  //lifecycle methods

  render () {

    return (
      <div className="MVP">
        <header className="MVP-header">
          Knitting Charts!!!!
        </header>


        <div className="stitchSelector">
          Stitch Selector:
          <button>Knit</button>
          <button>Purl</button>
          <button>Yarn Over</button>
        </div>

        <Chart
          rowsNC={this.state.rowsNC}
          columnsNC={this.state.columnsNC}
          chart={this.state.chart}
          handleCellClick={this.handleCellClick.bind(this)}
        />

        <button
          type='button'
          onClick={this.handleNewClick}
          >New Chart!</button>
      </div>
    );
  }
}

export default App;
