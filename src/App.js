import React from 'react';
import './App.css';
import Chart from './components/chart.js';
import Userdrawer from './components/userDrawer.js';
import NewChart from './components/newChartModal.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stitchSelection: '',
      chart: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","y/o","","y/o","","y/o","y/o","y/o","y/o","","","","y/o","","","","","","","","","y/o","","y/o","","y/o","","","","y/o","","y/o","","","","","","","","","","y/o","y/o","y/o","","y/o","y/o","","","y/o","","y/o","","","","","","","","","","y/o","","y/o","","y/o","","","","","y/o","","","","","","","","","","","y/o","","y/o","","y/o","","","","","y/o","","","","","","","","","","","y/o","","y/o","","y/o","y/o","y/o","","","y/o","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","y/o","y/o","y/o","","y/o","","y/o","","y/o","y/o","y/o","","y/o","y/o","y/o","","y/o","y/o","y/o","","","y/o","","","y/o","","y/o","","y/o","","","","y/o","","y/o","","y/o","","","","","y/o","","","y/o","y/o","y/o","","y/o","y/o","","","y/o","y/o","y/o","","y/o","y/o","","","","y/o","","","y/o","","y/o","","y/o","","","","y/o","y/o","","","y/o","","","","","y/o","","","y/o","","y/o","","y/o","","","","y/o","","y/o","","y/o","","","","","y/o","","","y/o","","y/o","","y/o","y/o","y/o","","y/o","","","y/o","y/o","y/o","y/o","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
      colorChart: ["cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell","cell"],
      rowsNC: '',
      columnsNC: '20',
      chart_name: '',
      isColoring: false
    }
    //binding
    this.handleNewClick = this.handleNewClick.bind(this);
    this.handleStitchSelection = this.handleStitchSelection.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleColorSelection = this.handleColorSelection.bind(this);
  }

  //event handling
  handleNewClick() {
    const rows = window.prompt('How many rows?');
    const columns = window.prompt('How many stitches wide?');
    this.setState({
      rowsNC: rows,
      columnsNC: columns,
      chart: Array(rows * columns).fill(''),
      colorChart: Array(rows * columns).fill('cell')
    });
  }

  handleCellClick(index) {
    //handle stitch selection for cell
    console.log('clickclickclick', index);
    if (this.state.isColoring === false) {
    var chart = this.state.chart;
    chart[index] = this.state.stitchSelection
    this.setState(chart);
    } else if (this.state.colorChart[index] === 'cell') {
      let colorChart = this.state.colorChart;
      colorChart[index] = 'cell-colored'
      this.setState(colorChart)
    } else {
      let colorChart = this.state.colorChart;
      colorChart[index] = 'cell'
      this.setState(colorChart)
    }
  }

  handleStitchSelection(value) {
    console.log('sssselected: ', value)
    this.setState({stitchSelection: value, isColoring: false})
  }

  handleColorSelection(index) {
    this.setState({isColoring: true});
  }

  handleChange(e) {
    this.setState({chart_name: e.target.value})
  }
  handleChangeSearch(e) {
    this.setState({chart_name: e.target.value})
  }

  handleSave(e) {
    e.preventDefault();
    axios.post('http://localhost:3030/charts', {
      chart: JSON.stringify(this.state.chart),
      columns: parseInt(this.state.columnsNC),
      chart_name: this.state.chart_name
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
  }

  handleSearch(e) {
    e.preventDefault();
    axios.post('http://localhost:3030/chart', {chart_name: this.state.chart_name})
      .then((data) => {
        console.log('fe data', typeof(data.data[0].chart), data.data[0].columns)
        this.setState({chart: JSON.parse(data.data[0].chart), columnsNC: data.data[0].columns})
      })
      .catch((err) => console.log('could not display chart'))
  }

  render () {

    return (
      <div className="MVP">
        <header className="MVP-header">
          TheProcrastiKNITor!
        </header>

      <div>
        <form onSubmit={this.handleSearch}>
          <input
            name='name it'
            placeholder="Search by Name"
            value={this.state.chart_name}
            onChange={this.handleChangeSearch}
          ></input>
          <button
            type='submit'
            >Search Chart!
          </button>
        </form>
      </div>

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
            name='secondary color'
            onClick={() => this.handleColorSelection()}
            >Secondary Color
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
          colorChart={this.state.colorChart}
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


      {/* <NewChart/> */}

      </div>
    );
  }
}

export default App;
