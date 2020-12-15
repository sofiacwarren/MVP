import React from 'react';
import './App.css';
import Chart from './components/grid.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stitchSelection: 'knit'
    }
    //binding
  }

  //event handling

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

        <Chart/>
      </div>
    );
  }
}

export default App;
