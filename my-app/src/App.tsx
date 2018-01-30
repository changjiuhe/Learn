import * as React from 'react';
import './App.css';

import Counter from './Counter';
import AddButton from './AddButton';
import ReduceButton from './ReduceButton';
import ResetButton from './ResetButton';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Counter />
          <AddButton title={'+'} />
          <ReduceButton title={'-'} />
          <ResetButton title={'c'} />
        </div>
      </div>

    );
  }
}

export default App;
