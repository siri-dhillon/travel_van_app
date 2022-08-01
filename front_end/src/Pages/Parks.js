import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class Parks extends Component{

  constructor(props) {
    super(props);

    this.state={
      Data_tab:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'park')
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
      <h1 className="mb-3 text-success">Park Life!</h1>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Events</th>
            <th> Name</th>
            <th> Address</th>
            
          </tr>
          </thead>
          <tbody>
            {Data_tab.map(dep =>
              <tr key={dep.ParkID}>
                <td>{dep.ParkID}</td>
                <td>{dep.Events}</td>
                <td>{dep.Name}</td>
                <td>{dep.Address}</td>
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