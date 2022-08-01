import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class PublicTransport extends Component{

  constructor(props) {
    super(props);

    this.state={
      data_public:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'publictransport')
    .then(response=>response.json())
    .then(data=>{
      this.setState({data_public:data});
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      data_public
    }=this.state;

    return(
    <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Can't decide where to go next?</h1>
      <h4 className="mb-3">Copy and paste one of the links to find your next destination</h4>
      <h5 className="mb-3 text-success">Using Public Transport</h5>

      <h6> To go back to the list costs, click Transport</h6>
      <div className= "mb-3" > <a href="/Transport" className="btn btn-outline-success">Transport</a></div>

      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Link</th>
          </tr>
          </thead>
          <tbody>
            {data_public.map(dep =>
              <tr key={dep.TransportID}>
                <td>{dep.TransportID}</td>
                <td>{dep.Route}</td>
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