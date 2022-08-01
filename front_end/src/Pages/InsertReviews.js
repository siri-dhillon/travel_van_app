import logo from './Images/Travel-Van-Logo.png';
import React, {Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';


export class InsertReviews extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            Placeid: 0,
            UserId:'',
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
      const Rewierid = this.state.UserId;
      const Ratings = this.state.Phone;
      const Reviewid = this.state.Password;
          
      axios.post(variables.API_URL+'insertreviews',  {
        "Name" : Name,
        "UserId" : UserId,
        "Phone" : Phone,
        "Password" : Password
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
        <div className="Create Account">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={logo} alt = "TravelVan Logo" className="img-fluid"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    </div> 
        
                    <h1>Create Account</h1>
                    <label>Name</label>
                    <input value={this.state.Name} onChange={this.onChange} type = "text" autoComplete="off" name="Name" className="form-control mb-2" placeholder="Enter your name" 
                    />
        
                    <label>UserId</label>
                    <input value={this.state.UserId} onChange={this.onChange} type = "text" autoComplete="off" name="UserId" className="form-control mb-2" placeholder="Create a unique UserID" />

                    <label>Phone Number</label>
                    <input value={this.state.Phone} onChange={this.onChange} type = "tel" autoComplete="off" name="Phone" className="form-control mb-2" placeholder="Enter your phone number" />

                    <label>Password</label>
                     <input value={this.state.Password} onChange={this.onChange} type = "text" autoComplete="off" name="Password" className="form-control mb-4" placeholder="Make a strong password" 
                    />
                    <button onClick={this.Login} className="btn btn-success btn-block mb-4">Create Account</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/signin"
                className="link-success">Sign In</a></p>
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