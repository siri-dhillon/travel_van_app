// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import React, {Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';


export class FindReviews extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            data_array: [],
            Reviewid: '',
            Placeid: 0,
            Reviewerid:'',
            Ratings: 0.0,
            w_review:'',
            erros:''
        };
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
       }

       
       Login =(e) =>{
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });    

        const Reviewid = this.state.Reviewid;
        const Placeid = this.state.Placeid;
        const Reviewerid = this.state.Reviewerid;
        const Ratings = this.state.Ratings;
        const w_review = this.state.w_review;

          
      axios.post(variables.API_URL+'findreviews',  {
        "Reviewid" : Reviewid,
        "Placeid" : Placeid,
        "Reviewerid" : Reviewerid,
        "Ratings" : Ratings,
        "w_review" : w_review
      } )
      .then( (res) => {
        console.log(res.data);
        this.State = {res}; 

        this.setState({data_array:res.data})
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
        data_array
      }=this.state;
   
    return (
        <React.Fragment>   
        { this.state.erros ?
         <i className="alert alert-danger" role="alert">
             {this.state.erros}</i> : '' 
        } 
        <section className="vh-100">
        <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">To find all of your reviews, type in your UserId and press enter</h1>
      <input value={this.state.Reviewerid} onChange={this.onChange} type = "text" name="Reviewerid" autoComplete="off" className="form-control mb-3" placeholder="Enter UserId" 
      />
        <button onClick={this.Login} className="btn btn-outline-success mb-3" type="submit">Enter</button>
                </div>
                <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
          <th> Reviewid</th>
            <th> Placeid</th>
            <th> Your UserId</th>
            <th> Your Rating</th>
            <th> Your Review</th>
          </tr>
          </thead>
          <tbody>
            {data_array.map(dep =>
              <tr key={dep.Reviewid}>
                <td>{dep.Reviewid}</td>
                <td>{dep.Placeid}</td>
                <td>{dep.Reviewerid}</td>
                <td>{dep.Ratings}</td>
                <td>{dep.w_review}</td>
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