// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class UnderAvg extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'underavg')
    .then(response=>response.json())
    .then(data=>{
      this.setState({data_:data});
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      data_
    }=this.state;

    return(
    <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Below are the Transport ID's of transport with cost under the average of all transport cost</h1>
      <h4 className="mb-3">Click Transport, to go back to Transport</h4>

      <div className= "mb-3" > <a href="/Transport" className="btn btn-outline-success">Transport</a></div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Cost</th>
          </tr>
          </thead>
          <tbody>
            {data_.map(dep =>
              <tr key={dep.TransportID}>
                <td>{dep.TransportID}</td>
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