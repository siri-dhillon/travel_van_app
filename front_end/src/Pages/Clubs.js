import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class Clubs extends Component{

  constructor(props) {
    super(props);

    this.state={
      Data_tab:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'club')
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
      <h1 className="mb-3 text-success">Check out Vancouver City's Night Life!</h1>
      <h5 className="mb-3">Dinner, Drinks, Dancing and so much more!</h5>
      <h5 className="mb-3 text-success">To view clubs by name only click Name below</h5>
      <h5 className="mb-3 text-success">To view clubs by address only click Address below</h5>
      <h5 className="mb-3 text-success">To view clubs by fee only click Fee below</h5>
      <div className= "mb-3" > <a href="/ClubName" className="btn btn-outline-success">Name</a></div>
      <div className= "mb-3" > <a href="/ClubAddress" className="btn btn-outline-success">Address</a></div>
      <div className= "mb-3" > <a href="/ClubFee" className="btn btn-outline-success">Fee</a></div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Entree Fee</th>
            <th> Club Name</th>
            <th> Address</th>
            
          </tr>
          </thead>
          <tbody>
            {Data_tab.map(dep =>
              <tr key={dep.ClubID}>
                <td>{dep.ClubID}</td>
                <td>{dep.Fee}</td>
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