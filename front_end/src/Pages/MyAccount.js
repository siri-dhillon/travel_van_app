import {React, Component} from 'react'; 

export class MyAccount extends Component{
  render () {

    return(
      <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">My Account Page</h1>
      <h4 className="mb-3">Here you can update your phone number or delete your account</h4>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> Delete Account</th>
            <th> Update Phone Number</th>
          </tr>
          </thead>
          <tbody>

          {/* <td><h6>Click Delete Account to Delete</h6> */}
          {/* <div className= "mb-3" > <a href="/DeleteAccount" className="btn btn-outline-success">Delete Account</a></div></td> */}


          <td><h6>Click Update Phone Number to Update</h6>
          <button className="btn btn-success mb-4">Update Phone Number</button></td>
                  
          </tbody>
      </table>
    </div>
    )
  }
}