import logo from './Images/Travel-Van-Logo.png';

//This is the sign in page for users to sign into
import React, {Component} from 'react'; 


export class SignIn extends Component{
  render () {
  return (
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src={logo} alt = "TravelVan Logo" class="img-fluid"/>
        </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
            <h1>Sign In</h1>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 me-3">Welcome back!</p>
          </div> 

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
            placeholder="Enter your UserID" />
            <label class="form-label" for="form3Example3">UserID</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <button className="btn btn-success btn-block mb-4"> Sign In</button>
          <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/createaccount"
                class="link-success">Create Account</a></p>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
      <div class="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
  </div>
</section>

    );
}
}
 