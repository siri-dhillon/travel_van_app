import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class Malls extends Component{

  constructor(props) {
    super(props);

    this.state={
      Data_tab:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'malls')
    .then(response=>response.json())
    .then(data=>{
      this.setState({Data_tab:data});
      console.log(data);
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
      <h1 className="mb-3 text-success">Shop in some the most exclusive brands, shops boutiques here!</h1>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Directory</th>
            <th> Name</th>
            <th> Address</th>
          </tr>
          </thead>
          <tbody>
            {Data_tab.map(dep =>
              <tr key={dep.MallID}>
                <td>{dep.MallID}</td>
                <td>{dep.Directory}</td>
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