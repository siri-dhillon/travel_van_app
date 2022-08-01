import logo from './Images/Travel-Van-Logo.png';

//This is the sign in page for users to sign into
import React, {Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';


export class Reviews extends Component{

    constructor(props) {
      super(props);
      this.state = { 
          UserId:'',
          password:'',
          erros:''
      };
  // console.log('login',props)
  }

  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
   }

    Login =(e) =>{
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });    

    const UserId = this.state.UserId;
    const password = this.state.password;
        
    axios.post(variables.API_URL+'signin',  {
      "UserId" : UserId,
      "password" : password
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
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={logo} alt = "TravelVan Logo" className="img-fluid"/>
        </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <h1>Sign In</h1>
        <p className="lead fw-normal mb-3 me-3">Welcome back!</p>
        <label> UserId</label>
        <input value={this.state.UserId}
                onChange={this.onChange} 
                type="text"
                name="UserId" 
                autoComplete="off"
                className="form-control mb-3" 
                placeholder="Enter your Userid"
                />
        <label> Password</label>
        <input value={this.state.password}
                onChange={this.onChange} 
                type="password" 
                name="password"
                className="form-control mb-3" 
                placeholder="Enter your Password"
                />
        <button onClick={this.Login}  className="btn btn-md btn-success btn-block" type="submit">Sign in</button>
        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/createaccount"
                className="link-success">Create Account</a></p>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
      <div className="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
  </div>
</section>
</React.Fragment>
    );
}
}
 