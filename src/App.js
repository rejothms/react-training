import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './AutoComplete';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import NewCars from './components/NewCars';


class App extends Component {

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
          'Nissan'
        ], 
        count: 0

      }
 
  

  }

  componentWillMount() {


  }

  componentDidMount() {


  }

  handleClick = () => {
     
     this.setState({count: this.state.count + 1});
  }


countUpdate = () => {
  return (
    <div>count updated</div>
  )
}

  render() {

    let countChanged;

    if(this.state.count === 3) {
      countChanged = <div>count is 3</div>
    } else {
      countChanged = <div>count: </div>
    }

    const { options } = this.state;

    return (
      <div>

     <BrowserRouter>
     
            <Link to="/">Home </Link>
            <Link to="/newcars">New Cas </Link>
            <Link to="/news">news </Link>
            <Link to="/contact">contact</Link>
            <Link to="/test">contact</Link>

            


            <div>
             <Switch>
              <Route exact path='/' render={props => <div>home </div>} />
              <Route path="/newcars" render={props => <NewCars {...props} />} />
              <Route path='/news' render={props => <div>news </div>} />
              <Route render={props => <div>404</div>} />
              <Route path="/contact" render={props => <div>contact </div>} />
              </Switch>
            </div>
     
     </BrowserRouter>




       {/* <button width="100" height="60" onClick={this.handleClick}>count</button>
        <AutoComplete vehicles={options}/>
        this.state.count === 2 ? this.countUpdate(): ''}
        
        {this.state.count > 5 && <div>greater than 5</div>}

    {countChanged */}
      </div>
    )

  }


}

export default App