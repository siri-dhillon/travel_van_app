// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import React, {Component} from 'react'; 
import { variables } from '../Variables';

export class ConcertMin extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            data_concerts: [],
            erros:''
        };
    }

    refreshList(){
      fetch(variables.API_URL+'concertmin')
      .then(response=>response.json())
      .then(data=>{
        this.setState({data_concerts:data});
      })
  }
  
    componentDidMount() {
      this.refreshList();
    }
  render () {
    const {
        data_concerts
      }=this.state;
   
    return (
        <React.Fragment>   
        { this.state.erros ?
         <i className="alert alert-danger" role="alert">
             {this.state.erros}</i> : '' 
        } 
        <section className="vh-100">
        <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Below is the concert with the lowest price</h1>
      <h5 className="mb-3 text">To go back to concerts, click Concerts below</h5>
      <div className= "mb-3" > <a href="/Concerts" className="btn btn-outline-success">Concerts</a></div>
                </div>
                <table className="table table-success table-striped table-hover text-center">
        <thead>
          <tr> 
            <th> ID</th>
            <th> Price</th>
            <th> Concert Name</th>
            <th> Address</th>
            <th> Date</th>
          </tr>
          </thead>
          <tbody>
            {data_concerts.map((dep,ConcertID) =>
              <tr key={ConcertID}>
                <td>{dep.ConcertID}</td>
                <td>{dep.Price}</td>
                <td>{dep.Name}</td>
                <td>{dep.Address}</td>
                <td>{dep.Date}</td>
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