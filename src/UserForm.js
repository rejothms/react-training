import React from 'react';
import logo from './logo.svg';
import './App.css';


class UserForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    }

    

  }

  handleChange = (e) => {
 
  const { name, value } = e.target;

  let { errors } = this.state;

  switch (name) {
    case 'fullName': 
      errors.fullName = 
        value.length < 5
          ? 'Full Name must be 5 characters long!'
          : '';
      break;
    case 'email': 
      errors.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
      break;
    case 'password': 
      errors.password = 
        value.length < 8
          ? 'Password must be 8 characters long!'
          : '';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value});
  }


  handleSubmit = (event) => {
   
    event.preventDefault();
    if(this.validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }


 validateForm = (errors) => {
    let valid = true;
    console.log(errors)
    Object.values(errors).forEach(
      
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }


 
  
  render() {

    const {errors} = this.state;
    return (
     
        <div>from
  
  <form onSubmit={this.handleSubmit} noValidate>
  
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 &&
                <span className='error'>{errors.fullName}</span>}
            </div>
  
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' onChange={this.handleChange} noValidate />
                {errors.email.length > 0 && 
                  <span className='error'>{errors.email}</span>}
              </div>
  
              <div className='password'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' onChange={this.handleChange} noValidate />
                {errors.password.length > 0 && 
                  <span className='error'>{errors.password}</span>}
              </div>
  
              <div className='submit'>
                <button>Create</button>
              </div>
  
          </form>
  
        </div>
  
      
    )

  }


}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


export default UserForm






