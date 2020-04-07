import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';



class NewCars extends React.Component {

  constructor(props) {

    super(props);

      this.state = {
      
      }
  }


  navigateCar = () => {
    console.log(this.props);

    this.props.history.push('/newcars/ford')
  }


  

  render() {

    const { match } = this.props;

    return (
      <div>
            <button width="100" height="50" onClick={this.navigateCar}>Ford</button>
            <Link to={`${match.url}/suzuki`}>suzuki </Link>

            <div>

            <Switch>
            <Route exact path={`${match.url}/:id`} render={ props => <CarList {...props} />} /> 
           
            </Switch>

            </div>
           
      </div>
    )
  }
}

export default NewCars;

export class CarList extends React.Component {

  render() {
   return (
    <div>
      {this.props.match.url}
    </div>
   )
  }

}