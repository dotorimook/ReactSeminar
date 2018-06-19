import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleComponent from './components/SimpleComponent';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

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
      <div>
        <BrowserRouter>
          <div>
            <ul id='menu'>
              <li>
                <NavLink to="/1">component 1</NavLink>
              </li>
              <li>
                <NavLink to="/2">component 2</NavLink>
              </li>
              <li>
                <NavLink to="/3">component 3</NavLink>
              </li>
            </ul>
            <Route path="/1" component={Component1}/>
            <Route path="/2" component={Component2}/>
            <Route path="/3" component={Component3}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
