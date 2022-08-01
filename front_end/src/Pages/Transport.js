// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class Transport extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'transport')
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
      <h1 className="mb-3 text-success">Can't decide where to go next?</h1>
      <h4 className="mb-3">Below are the costs of transportation to some places</h4>
      <h5 className="mb-3 text-success">Refer to to public or private transport by clicking the buttons to maybe find your next destination</h5>
      <h5 className="mb-3 text">Want transport under the average price? Click Under Average</h5>

      <div className= "mb-3" > <a href="/PublicTransport" className="btn btn-outline-success">Public Transport</a></div>
      <div className="mb-3"> <a href="/PrivateTransport" className="btn btn-outline-success">Private Transport</a></div>
      <div className="mb-3"> <a href="/UnderAvg" className="btn btn-outline-success">Under Average</a></div>
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