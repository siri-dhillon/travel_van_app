import logo from './Images/Travel-Van-Logo.png';

//This is the sign in page for users to sign into
import React, {Component} from 'react'; 
import { variables } from '../Variables';
//import { response } from 'express';

const userid = "";
const password ="";

export class SignIn extends Component{

  constructor(props) {
    super(props);

    this.state={
      Data_tab:[], 
      userid: "",
      password: ""
    }

  }

  OnClick(){
    fetch(variables.API_URL+'signin', {
      method: 'POST',
      body: {
        UserId: userid,
        password: password
      }
    })
    .then(response=>response.json())
    .then(data=>{
      this.setState({Data_tab:data});
      console.log({Data_tab:data});
    })
}

  render () {

    // const {
    //   Data_tab
    // }=this.state;

  return (
  <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={logo} alt = "TravelVan Logo" className="img-fluid"/>
        </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form action = "https://www.google.ca/">
            <h1>Sign In</h1>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Welcome back!</p>
          </div> 

          <div className="form-outline mb-4">
            <input type="text" id="form3Example3" className="form-control form-control-lg"
            placeholder="Enter your UserID" onChange={(e)=>{
              //userid = e.target.value
              this.setState({userid:e.target.value})
            }} />
            <label className="form-label" htmlFor="form3Example3">UserID</label>
          </div>

          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" onChange={(e)=>{
                //password = e.target.value
                this.setState({userid:e.target.value})
              }}/>
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <button className="btn btn-success btn-block mb-4" onClick={this.OnClick()}> Sign In</button>
          <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/createaccount"
                className="link-success">Create Account</a></p>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
      <div className="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
  </div>
</section>


    );
}
}
 