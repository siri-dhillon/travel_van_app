import React, {Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';

export class UpdatePhone extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            Phone: 0,
            UserId:'',
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
        
      const Phone = this.state.Phone;
      const UserId = this.state.UserId;
          
      axios.put(variables.API_URL+'updatephone',  {
        "Phone" : Phone,
        "UserId" : UserId
      } )
      .then( (res) => {
        console.log(res);
        if(res['data'].token) { // this mean succsfuly
          
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
            this.props.ReUserState(true);
            // let navigate = useNavigate();
            // navigate('/Home');
            this.props.history.push('/Home');
            // window.open("/Home");
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

    return(
    <React.Fragment>  
        { this.state.erros ?
     <i className="alert alert-danger" role="alert">
         {this.state.erros}</i> : '' 
    } 
    <section className="vh-100">
      <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Update Phone</h1>
      <h5 className="mb-3">To change your phone number, enter new Phone Number and your UserId</h5>
      <label>Phone</label>
      <input value={this.state.Phone} onChange={this.onChange} type = "tel" autoComplete="off" name="Phone" className="form-control mb-3" placeholder="Enter your Phone" 
      />
      <label>UserId</label>
      <input value={this.state.UserId} onChange={this.onChange} type = "text" autoComplete="off" name="UserId" className="form-control mb-3" placeholder="Enter your UserId" 
      />
      <h5 className="mb-3">To confirm, press Update Phone</h5>
      <button onClick={this.Login} className="btn btn-outline-success mb-3">Update Phone</button>
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