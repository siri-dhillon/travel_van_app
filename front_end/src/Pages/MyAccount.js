// Created by: Sirpreet K. Dhillon and Simran Nijjar 

import {React, Component} from 'react'; 

export class MyAccount extends Component{
  render () {

    return(
      <section className="vh-100">
      <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">My Account Page</h1>
      <h4 className="mb-3">Here you can update your phone number or delete your account or find all of your reviews</h4>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> Delete Account</th>
            <th> Update Phone Number</th>
            <th> Find Reviews</th>
          </tr>
          </thead>
          <tbody>

          <td><h6>Click Delete Account to Delete</h6> 
          <div className= "mb-3" > <a href="/DeleteAccount" className="btn btn-outline-success">Delete Account</a></div></td>


          <td><h6>Click Update Phone Number to Update</h6>
          <div className="mb-3"> <a href="/UpdatePhone" className="btn btn-outline-success">Update Phone Number</a></div></td> 

          <td><h6>Click Find Reviews to find your reviews</h6>
          <div className="mb-3"> <a href="/FindReviews" className="btn btn-outline-success">Find Reviews</a></div></td> 
          </tbody>
      </table>
    </div>
    <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
      <div className="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
  </div>
    </section>
    )
  }
}