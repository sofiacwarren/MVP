import React from 'react';
import './App.css';
import Chart from './components/chart.js';
import Userdrawer from './components/userDrawer.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stitchSelection: '',
      chart: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","y/o","","y/o","","y/o","y/o","y/o","y/o","","","","y/o","","","","","","","","","y/o","","y/o","","y/o","","","","y/o","","y/o","","","","","","","","","","y/o","y/o","y/o","","y/o","y/o","","","y/o","","y/o","","","","","","","","","","y/o","","y/o","","y/o","","","","","y/o","","","","","","","","","","","y/o","","y/o","","y/o","","","","","y/o","","","","","","","","","","","y/o","","y/o","","y/o","y/o","y/o","","","y/o","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","y/o","y/o","y/o","","y/o","","y/o","","y/o","y/o","y/o","","y/o","y/o","y/o","","y/o","y/o","y/o","","","y/o","","","y/o","","y/o","","y/o","","","","y/o","","y/o","","y/o","","","","","y/o","","","y/o","y/o","y/o","","y/o","y/o","","","y/o","y/o","y/o","","y/o","y/o","","","","y/o","","","y/o","","y/o","","y/o","","","","y/o","y/o","","","y/o","","","","","y/o","","","y/o","","y/o","","y/o","","","","y/o","","y/o","","y/o","","","","","y/o","","","y/o","","y/o","","y/o","y/o","y/o","","y/o","","","y/o","y/o","y/o","y/o","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
      changedChart: [],
      rowsNC: '',
      columnsNC: '20',
      chart_name: ''
    }
    //binding
    this.handleNewClick = this.handleNewClick.bind(this);
    this.handleStitchSelection = this.handleStitchSelection.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange= this.handleChange.bind(this);
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

  handleStitchSelection(value) {
    console.log('sssselected: ', value)
    this.setState({stitchSelection: value})
  }

  handleChange(e) {
    this.setState({chart_name: e.target.value})
  }

  handleSave(e) {
    // let request = {method: 'POST',
    // headers: {'Content-Type': 'application/json'}, mode: 'no-cors'};
    // let newChartInfo = this.state.chart;
    // request.body = JSON.stringify(newChartInfo);
    // console.log('saving chart data', request);
    // fetch('http://localhost:3030/charts', request)
    //   .then(console.log('saved'))
    //   .catch(console.log('error'))
    e.preventDefault();
    axios.post('http://localhost:3030/charts', {
      chart: JSON.stringify(this.state.chart),
      columns: parseInt(this.state.columnsNC),
      chart_name: this.state.chart_name
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
  }

  render () {

    return (
      <div className="MVP">
        <header className="MVP-header">
          TheProcrastiKNITor!
        </header>

          {/* <Userdrawer/> */}

        <div className="stitchSelector">
          StitchPalette:
          <button
            type='button'
            name='knit'
            onClick={() => this.handleStitchSelection('k')}
            >Knit
          </button>
          &#60;3
          <button
            type='button'
            name='purl'
            onClick={() => this.handleStitchSelection('p')}
            >Purl
          </button>
          &#60;3
          <button
            type='button'
            name='yarn over'
            onClick={() => this.handleStitchSelection('y/o')}
            >Yarn Over
          </button>
          &#60;3
          <button
            type='button'
            name='knit 2 together'
            onClick={() => this.handleStitchSelection('k2t')}
            >Knit 2 Together
          </button>
          &#60;3
          <button
            type='button'
            name='erase'
            onClick={() => this.handleStitchSelection('')}
            >Erase
          </button>
        </div>

        <Chart
          rowsNC={this.state.rowsNC}
          columnsNC={this.state.columnsNC}
          chart={this.state.chart}
          handleCellClick={this.handleCellClick.bind(this)}
        />
      <div>
        <form onSubmit={this.handleSave}>
          <input
            name='name it'
            placeholder="Name Me to Save Me"
            value={this.state.chart_name}
            onChange={this.handleChange}
          ></input>
          <button
            type='submit'
            >Save Chart!
          </button>
        </form>
        <button
          type='button'
          onClick={this.handleNewClick}
          >New Chart!</button>
      </div>
      </div>
    );
  }
}

export default App;
