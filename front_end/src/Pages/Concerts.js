// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class Concerts extends Component{

  constructor(props) {
    super(props);

    this.state={
      Data_tab:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'concert')
    .then(response=>response.json())
    .then(data=>{
      this.setState({Data_tab:data});
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      Data_tab
    }=this.state;

    return(
      <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Concerts in Metro Vancouver!</h1>
      <h5 className="mb-3">Listen to some amazing music from various artists</h5>
      <h5 className="mb-3 text-success">To look for the concert with the lowest concert price, select Minimum</h5>
      <h5 className="mb-3 text-success">To look for the concert with the highest concert price, select Maximum</h5>
      <div className= "mb-3" > <a href="/ConcertMin" className="btn btn-outline-success">Minimum</a></div>
      <div className= "mb-3" > <a href="/ConcertMax" className="btn btn-outline-success">Maximum</a></div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Price</th>
            <th> Date</th>
            <th> Name</th>
            <th> Address</th>
          </tr>
          </thead>
          <tbody>
            {Data_tab.map(dep =>
              <tr key={dep.ConcertID}>
                <td>{dep.ConcertID}</td>
                <td>{dep.Price}</td>
                <td>{dep.Date}</td>
                <td>{dep.Name}</td>
                <td>{dep.Address}</td>
                
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