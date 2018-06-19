import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleComponent from './components/SimpleComponent';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello'
    };
  }

  updateMsg = (name) => {
    this.setState({
      msg: name + ', hello'
    });
  }

  render() {
    const foo = {
      name: 'foo'
    };
    const {msg} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {msg}
        </p>
        <SimpleComponent name='you' data={foo} onUpdate={this.updateMsg} />
      </div>
    );
  }
}

export default App;
