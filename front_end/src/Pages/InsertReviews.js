import logo from './Images/Travel-Van-Logo.png';
import React, {Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';


export class InsertReviews extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            Placeid: 0,
            Reviewerid:'',
            Ratings: 0.0,
            w_review:'',
            pictureid:'',
            erros:''
        };
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
       }
    
           
       Login =(e) =>{
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });    
    
      const Placeid = this.state.Placeid;
      const Reviewerid = this.state.Reviewerid;
      const Ratings = this.state.Ratings;
      const w_review = this.state.w_review;
          
      axios.post(variables.API_URL+'insertreviews',  {
        "Placeid" : Placeid,
        "Reviewerid" : Reviewerid,
        "Ratings" : Ratings,
        "w_review" : w_review
      } )
      .then( (res) => {
        console.log(res);
        if(res['data'].token) { // this mean succsfuly
          
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
            this.props.ReUserState(true);
            
            this.props.props.history.push('/Home');
          } 
          if(res['data'].message){// this mean faild
            const err  = res.data.message;
            this.setState({
              erros: err
            });
          }
  
      })
      .catch((err) => {console.log(err)} )
      }
  render () {
   
    return (
        <React.Fragment>   
        { this.state.erros ?
         <i className="alert alert-danger" role="alert">
             {this.state.erros}</i> : '' 
        } 
        <section className="vh-100">
        <div className="Insert Reviews">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={logo} alt = "TravelVan Logo" className="img-fluid"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    </div> 
        
                    <h1>Write a Review</h1>
                    <label>Placeid</label>
                    <input value={this.state.Placeid} onChange={this.onChange} type = "text" autoComplete="off" name="Placeid" className="form-control mb-2" placeholder="Enter your the id of the place you are reviewing" 
                    />
        
                    <label>Reviewerid</label>
                    <input value={this.state.Reviewerid} onChange={this.onChange} type = "text" autoComplete="off" name="Reviewerid" className="form-control mb-2" placeholder="Enter your UserId" />

                    <label>Rating</label>
                    <input value={this.state.Rating} onChange={this.onChange} type = "text" autoComplete="off" name="Ratings" className="form-control mb-2" placeholder="Enter your rating of the place as a number" />

                    <label>Review</label>
                     <input value={this.state.w_review} onChange={this.onChange} type = "text" autoComplete="off" name="w_review" className="form-control mb-4" placeholder="Write your review" 
                    />
                    <button onClick={this.Login} className="btn btn-success btn-block mb-4">Insert Review</button>
                </div>
            </div>
        </div>
    </div>
    <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
            <div className="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
        </div>
    </section>
    </React.Fragment>
    )
}
}