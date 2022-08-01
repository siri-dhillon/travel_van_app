// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import React, {Component} from 'react'; 
import { variables } from '../Variables';

export class ClubAddress extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            data_clubs: [],
            erros:''
        };
    }

    refreshList(){
      fetch(variables.API_URL+'clubaddress')
      .then(response=>response.json())
      .then(data=>{
        this.setState({data_clubs:data});
      })
  }
  
    componentDidMount() {
      this.refreshList();
    }
  render () {
    const {
        data_clubs
      }=this.state;
   
    return (
        <React.Fragment>   
        { this.state.erros ?
         <i className="alert alert-danger" role="alert">
             {this.state.erros}</i> : '' 
        } 
        <section className="vh-100">
        <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Below are clubs by address</h1>
      <h5 className="mb-3 text">To go back to clubs, click Clubs below</h5>
      <div className= "mb-3" > <a href="/Clubs" className="btn btn-outline-success">Clubs</a></div>
                </div>
                <table className="table table-success table-striped table-hover text-center">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Address</th>
          </tr>
          </thead>
          <tbody>
            {data_clubs.map((dep,ClubID) =>
              <tr key={ClubID}>
                <td>{dep.ClubID}</td>
                <td>{dep.Address}</td>
                 </tr> 
                 )}

          </tbody>
      </table>
    <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
            <div className="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
        </div>
    </section>
    </React.Fragment>
    )
}
}