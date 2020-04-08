import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../App.css'
import { fetchList, fetchPromise } from '../services/fetchItems';


class NewCars extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      listItem: []

    }
  }


  componentDidMount() {

    /*
    fetch('http://localhost:3000/lists')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ listItem: data })
      })
      .catch(error => {
        console.log(error)
      }) */

 /*     fetchList()
      .then((data)=>{
        console.log(data);
        this.setState({listItem: data});
      })
      .catch(error=>{
         //this.setState({error: error.message})
      })   */
     /* console.log('a')
      this.fetchData();
      console.log('b'); */

      this.fetDataPromise()
  }

  fetDataPromise = async() => {

    let result = await fetchPromise();
    //if()
    this.setState({listItem: result});


  }


  fetchData = async() => {
   // let value = await 'c';
   // console.log(value);

   /* try {
    let data = await fetchList();
    this.setState({listItem: data});
    } catch(error) {

    } */
  }



  navigateCar = () => {
    console.log(this.props);

    this.props.history.push('/newcars/ford')
  }




  render() {

    const { match } = this.props;

    const { listItem } = this.state;

    return (
      <div>
        <ul>
          {
            listItem.map((item, index) => {
              return <li key={item.id}>{item.title}</li>
            })

          }
        </ul>

        <button width="100" height="50" onClick={this.navigateCar}>Ford</button>
        <Link to={`${match.url}/suzuki`}>suzuki </Link>

        <div>

          <Switch>
            <Route exact path={`${match.url}/:id`} render={props => <CarList {...props} />} />

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