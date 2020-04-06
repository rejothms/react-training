import React from 'react';
import logo from './logo.svg';
import './App.css';



class AutoComplete extends React.Component {

  constructor(props) {

    super(props);

      this.state = {
      
        userInput: '',
        filteredOptions: []
       

      }
 
  

  }

  onChange = (e) => {

    const { vehicles } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = vehicles.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({filteredOptions: filteredOptions});

  }



  

  render() {

    const { vehicles } = this.props;
    const { filteredOptions } = this.state;
    console.log(vehicles);
    return (
      <div>
       <input type="text" onChange={this.onChange}></input>




       <ul>
            {filteredOptions.map((name, index) => {
              return (
                <li className="my-list" key={index} >
                  {name}
                </li>
              );
            })}
          </ul>

      </div>
    )

  }


}

export default AutoComplete