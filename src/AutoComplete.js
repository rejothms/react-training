import React from 'react';
import logo from './logo.svg';
import './App.css';


class AutoComplete extends React.Component {

  constructor(props) {

    super(props);

    this.state  = {
      userInput: '',
      filteredOptions: []
    }

    console.log(this.props)
    

  }

  onChange = (e) => {

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );


    this.setState({userInput: e.currentTarget.value,
     filteredOptions: filteredOptions})
  }

  renderOutp = () => {

    return (
      <div>test value</div>
     
     );
  }
  

  render() {
 

    

    return (
      <div>
    test
     
     </div>
    )

  }


}

export default AutoComplete






