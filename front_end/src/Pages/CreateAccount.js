import logo from './Images/Travel-Van-Logo.png';
import React, {Component} from 'react'; 


export class CreateAccount extends Component{
  render () {
   
    return (
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
                    <input type = "text" id="form2Example1" className="form-control mb-2" placeholder="Enter your name" 
                    />
        
                    <label>User</label>
                    <input type = "text" id="form2Example1" className="form-control mb-2" placeholder="Create a unique UserID" />
                    <label>Phone Number</label>
                    <input type = "tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="form2Example1" className="form-control mb-2" placeholder="Enter your phone number" />
                    <label>Password</label>
                     <input type = "text" id="form2Example1" className="form-control mb-4" placeholder="Make a strong password" 
                    />
                    <button className="btn btn-success btn-block mb-4"> Create Account</button>
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
    )
}
}