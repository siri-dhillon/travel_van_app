import logo from './Images/Travel-Van-Logo.png';
import React, {Component} from 'react'; 


export class CreateAccount extends Component{
  render () {
   
    return (
        <section class="vh-100">
        <div className="Create Account">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src={logo} alt = "TravelVan Logo" class="img-fluid"/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    </div> 
        
                    <h1>Create Account</h1>
                    <label>UserID</label>
                    <input type = "text" id="form2Example1" className="form-control mb-2" placeholder="Create a unique UserID" 
                    />
        
                    <label>Name</label>
                    <input type = "text" id="form2Example1" className="form-control mb-2" placeholder="Enter your name" />
                    <label>Phone Number</label>
                    <input type = "tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="form2Example1" className="form-control mb-2" placeholder="Enter your phone number" />
                    <label>Password</label>
                     <input type = "text" id="form2Example1" className="form-control mb-4" placeholder="Make a strong password" 
                    />
                    <button className="btn btn-success btn-block mb-4"> Create Account</button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/signin"
                class="link-success">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
            <div class="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
        </div>
    </section>
    )
}
}