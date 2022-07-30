import logo from './Images/Travel-Van-Logo.png';

//This is the sign in page for users to sign into
import React, {Component} from 'react'; 
import { variables } from '../Variables';
import axios from 'axios';


export class SignIn extends Component{

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
  
  // OnClick(UserId, password){
  //   fetch(variables.API_URL+'signin', {
  //     method: 'POST',
  //     Headers: {
  //       Accept: 'application.json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: {
        
  //       "UserId": "T004",
  //       "password": "password"
        
  //     }
  //   })
  //   .then(response=>response.json())
  //   .then(data=>{
  //     this.setState({Data_tab:data});
  //     console.log({Data_tab:data});
  //     console.log(UserId)
  //     console.log(password)
  //   })

// }

    Login =(e) =>{
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });    
    //   const Data = {
    //   UserId: this.state.UserId, 
    //   password: this.state.password
    // };
    const UserId = this.state.UserId;
    //console.log(UserId);
    const password = this.state.password;
    //console.log(password);
        
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
            {/* <form>
            <h1>Sign In</h1>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Welcome back!</p>
          </div> 

          <div className="form-outline mb-4">
            <input type="text" 
                    //id="_userID" 
                    className="form-control"
                    //placeholder="Enter your UserID" 
                    value={this.state.UserId}
                    onChange={this.onChange}
                    />
            <label className="form-label" htmlFor="form3Example3">UserID</label>
          </div>

          <div className="form-outline mb-3">
            <input type="password" 
                  //id="_password" 
                  className="form-control"
                  //placeholder="Enter password" 
                  value={this.state.password}
                  onChange={this.onChange} 
              />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <button className="btn btn-success btn-block mb-4" onClick={this.Login} type="submit"> Sign In</button>
          <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/createaccount"
                className="link-success">Create Account</a></p>

        </form> */}

    {/* <form className="form-signin"> */}
        <h4 className="h3 mb-3 font-weight-normal grey">Please sign in</h4>
        <input value={this.state.UserId}
                onChange={this.onChange} 
                type="text"
                name="UserId" 
                className="form-control" 
                placeholder="Email address"
                />
        <input value={this.state.password}
                onChange={this.onChange} 
                type="password" 
                name="password"
                className="form-control" 
                placeholder="Password"
                />
        <button onClick={this.Login}  className="btn btn-md btn-primary btn-block" type="submit">Sign in</button>
    {/* </form> */}
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
 

