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
            <th> Name</th>
            <th> Address</th>
            <th> Events</th>
          </tr>
          </thead>
          <tbody>
            {data_rec.map(dep =>
              <tr key={dep.RecId}>
                <td>{dep.Name}</td>
                <td>{dep.Address}</td>
                <td>{dep.Events}</td>
                 </tr> 
                 )}
          </tbody>
      </table>
    </div>
    )
  }
}