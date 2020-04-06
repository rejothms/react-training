import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './AutoComplete';
import UserForm from './UserForm';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
  

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      options: [

        'Ford',
        'Jeep',
        'Volkswagon',
        'KIA',
        'Toyota',
        'Renault',
        'Nissan',
        'Hyundai',
        'Maruti Suzuki',
        'MG',
        'Mercidez',
        'BMW',

      ]
    }
 
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    console.log(this);
    const { count } = this.state;
    this.setState({ count: count + 1 })
  }


  render() {

    return (
      <div>
        <button width="100" height="60" onClick={this.handleClick}>Count++</button>
        <BrowserRouter>
        <div>
      <Link to="/">Home </Link>
      <Link to="/register">About Us </Link>
      <Link to="/shop">Shop Now </Link>
    </div>
        
        <Route path="/" component={AutoComplete} />
        <Route path="/register" component={UserForm} />
        
        </BrowserRouter>
      </div>
    )

  }


}

export default App





/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


