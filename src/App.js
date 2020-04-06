import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './AutoComplete';



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
        <button width="100" height="60" onClick={this.handleClick}>count</button>
        <AutoComplete vehicles={options}/>
        {/*this.state.count === 2 ? this.countUpdate(): ''}
        
        {this.state.count > 5 && <div>greater than 5</div>}

    {countChanged */}
      </div>
    )

  }


}

export default App