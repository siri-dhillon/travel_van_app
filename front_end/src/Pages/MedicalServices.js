// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class MedicalServices extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_med:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'medicalservice')
    .then(response=>response.json())
    .then(data=>{
      this.setState({data_med:data});
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      data_med
    }=this.state;

    return(
    <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">To know whether an emergency service is 24/7, please click Emergency</h1>
      <h1 className="mb-3 text-success"> For a reference of non-emergency practitioners, please click Non-Emergency</h1>
      <div className= "mb-3" > <a href="/EmergencyMedicalService" className="btn btn-outline-success">Emergency</a></div>
      <div className= "mb-3"> <a href="/NonEmergencyMedicalService" className="btn btn-outline-success">Non-Emergency</a></div>

      <h4 className="mb-3">For all medical services please look through the table below</h4>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Address</th>
            <th> Phone</th>
          </tr>
          </thead>
          <tbody>
            {data_med.map(dep =>
              <tr key={dep.medID}>
                <td>{dep.medID}</td>
                <td>{dep.Address}</td>
                <td>{dep.Phone}</td>
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