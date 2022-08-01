// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import React, {Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';


export class RestaurantDressCode extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            data_restaurants: [],
            Name: '',
            dressCode:'',
            erros:''
        };
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
       }

       
       Login =(e) =>{
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });    
    
      const Name = this.state.Name;
      const dressCode = this.state.dressCode;

          
      axios.post(variables.API_URL+'restaurantdresscode',  {
        "Name" : Name,
        "dressCode" : dressCode
      } )
      .then( (res) => {
        console.log(res.data);
        this.State = {res}; 

        this.setState({data_restaurants:res.data})
        if(res['data'].token) { // this mean successfully
          
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
            this.props.ReUserState(true);
            
            this.props.props.history.push('/Home');
          } 
          if(res['data'].message){// this mean failed
            const err  = res.data.message;
            this.setState({
              erros: err
            });
          }
  
      })
      .catch((err) => {console.log(err)} )
      }
  render () {
    const {
        data_restaurants
      }=this.state;
   
    return (
        <React.Fragment>   
        { this.state.erros ?
         <i className="alert alert-danger" role="alert">
             {this.state.erros}</i> : '' 
        } 
        <section className="vh-100">
        <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">To find restaurant names by dress code</h1>
      <h4 className="mb-3">Type in dress code and then press search</h4>
      <input value={this.state.dressCode} onChange={this.onChange} type = "text" name="dressCode" autoComplete="off" className="form-control mb-3" placeholder="Enter dress code" 
      />
        <button onClick={this.Login} className="btn btn-outline-success mb-3" type="submit">Search</button>
                </div>
                <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> Restaurant Name</th>
            <th> Dress Code</th>
          </tr>
          </thead>
          <tbody>
            {data_restaurants.map((dep,RestaurantID) =>
              <tr key={RestaurantID}>
                <td>{dep.Name}</td>
                <td>{dep.dressCode}</td>
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