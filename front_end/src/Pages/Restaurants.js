import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class Restaurants extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_restaurants:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'Restaurant')
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
      <h1 className="mb-3 text-success">Check out some of the various food places!</h1>
      <h4 className="mb-3">From Canadian, to Indian, to French, to Japanese and so much more.</h4>
      <h5 className="mb-3 text-success">All of these restaurants make Vancouver a great place to travel!</h5>
      <h5 className="mb-3">To search restaurant name by dresscode, click search below</h5>
      <h5 className="mb-3 text-success">To group by dress code and average cost, click average below</h5>
      <div className= "mb-3" > <a href="/RestaurantDressCode" className="btn btn-outline-success">Search</a></div>
      <div className= "mb-3" > <a href="/RestaurantsAvgCost" className="btn btn-outline-success">Average</a></div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Restaurant Name</th>
            <th> Address</th>
            <th> Cuisine</th>
            <th> Dress Code</th>
            <th> Cost</th>
          </tr>
          </thead>
          <tbody>
            {data_restaurants.map(dep =>
              <tr key={dep.RestaurantID}>
                <td>{dep.RestaurantID}</td>
                <td>{dep.Name}</td>
                <td>{dep.Address}</td>
                <td>{dep.Cuisine}</td>
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