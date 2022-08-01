// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class RecreationCenters extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_rec:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'recreationcenters')
    .then(response=>response.json())
    .then(data=>{
      this.setState({data_rec:data});
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      data_rec
    }=this.state;

    return(
    <div className="p-10 text-center bg-white">
      <h2 className="mb-3 text-success">Want a place where you can workout, swim, skate, and join some cooking classes?</h2>
      <h4 className="mb-3">Copy and past the links to these recreation centers to find out how you can join</h4>
    
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Name</th>
            <th> Address</th>
            <th> Events</th>
          </tr>
          </thead>
          <tbody>
            {data_rec.map(dep =>
              <tr key={dep.RecId}>
                <td>{dep.RecId}</td>
                <td>{dep.Name}</td>
                <td>{dep.Address}</td>
                <td>{dep.Events}</td>
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