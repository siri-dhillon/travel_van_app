import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class RestaurantsAvgCost extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_restaurants:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'RestaurantsAvgCost')
    .then(response=>response.json())
    .then(data=>{
      this.setState({data_restaurants:data});
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      data_restaurants
    }=this.state;

    return(
      <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Below are the restaurant dress codes grouped by the average cost</h1>
      <h5 className="mb-3">To go back to restaurants, click Restaurants below</h5>
      <div className= "mb-3" > <a href="/Restaurants" className="btn btn-outline-success">Restaurants</a></div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> Dress Code</th>
            <th> Cost</th>
          </tr>
          </thead>
          <tbody>
            {data_restaurants.map(dep =>
              <tr key={dep.RestaurantID}>
                <td>{dep.dressCode}</td>
                <td>{dep.Cost}</td>
                 </tr> 
                 )}
          </tbody>
      </table>
    <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
            <div className="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
        </div>
    </div>
    )
  }
}