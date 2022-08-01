// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class NonEmergencyMedicalService extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_med:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'nonemergencymedicalservice')
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
      <h1 className="mb-3 text-success">Below tells you gives you the link of practitioners and the hours of the service</h1>
      <h4 className="mb-3">Copy and paste the link to find more information</h4>
    
      <h6> To go back to the list of medical services, click Medical Services</h6>
      <div className= "mb-3" > <a href="/MedicalServices" className="btn btn-outline-success">Medical Services</a></div>

      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Practitioners</th>
            <th> Hours</th>
          </tr>
          </thead>
          <tbody>
            {data_med.map(dep =>
              <tr key={dep.medID}>
                <td>{dep.medID}</td>
                <td>{dep.Practitioners}</td>
                <td>{dep.Hours}</td>
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