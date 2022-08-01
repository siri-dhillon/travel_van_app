import {React, Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';

export class DeleteAccount extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            UserId:'',
            erros:''
        };
    // console.log('login',props)
    }
  
    onChange = (e) =>{
      this.setState({ [e.target.name]: e.target.value });
     }

      RequestToRemove = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value }); 

         const UserId = this.state.UserId;
         axios.post(variables.API_URL+'deleteaccount',{
            "UserId" : UserId
         })
          .then(res => {
            console.log(res);
            
            console.log(res.data.message);
         })
         .catch((err) => {console.log(err)} )
        }
  render () {

    return(
      <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Delete</h1>
      <h5 className="mb-3">To delete your account, enter your UserId</h5>
      <label>UserId</label>
      <input value={this.state.UserId} onChange={this.onChange} type = "text" name="UserId" className="form-control mb-3" placeholder="Enter your UserId" 
      />
      <h5 className="mb-3">To confirm, press Delete Account</h5>
      <button onClick={this.RequestToRemove} className="btn btn-outline-success">Delete Account</button>
    </div>
    )
  }
}