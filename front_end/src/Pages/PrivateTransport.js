import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class PrivateTransport extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_private:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'PrivateTransport')
    .then(response=>response.json())
    .then(data=>{
      this.setState({data_private:data});
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      data_private
    }=this.state;

    return(
    <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Want to travel privately?</h1>
      <h4 className="mb-3">These are some of the most used private transport companies in Vancouver</h4>
      <h5 className="mb-3 text-success">Look up some of these companies to find their apps or phone numbers</h5>

      <h6> To go back to the list costs, click Transport</h6>
      <div className= "mb-3" > <a href="/Transport" className="btn btn-outline-success">Transport</a></div>

      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Company</th>
          </tr>
          </thead>
          <tbody>
            {data_private.map(dep =>
              <tr key={dep.TransportID}>
                <td>{dep.TransportID}</td>
                <td>{dep.Company}</td>
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