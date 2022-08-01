import {React, Component} from 'react'; 
import { variables } from '../Variables';

export class Reviews extends Component{

  constructor(props) {
    super(props);

    this.state={
      Data_tab:[]
    }
  }

  refreshList(){
    fetch(variables.API_URL+'selectreviews')
    .then(response=>response.json())
    .then(data=>{
      this.setState({Data_tab:data});
      console.log(data);
    })
}

  componentDidMount() {
    this.refreshList();
  }

  render () {
    const {
      Data_tab
    }=this.state;

    return(
      <div className="p-10 text-center bg-white">
      <h1 className="mb-3 text-success">Check out the Reviews!</h1>
      <h5 className="mb-3">To leave a review of your own, click search below</h5>
      <div className= "mb-3" > <a href="/InsertReviews" className="btn btn-outline-success">Insert Review</a></div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr> 
            <th> Name</th>
            <th> Adress</th>
            <th> Ratings</th>
            <th> Reviews</th>
            <th> Pictures Inserted</th>
          </tr>
          </thead>
          <tbody>
            {Data_tab.map((dep,PlaceId) =>
              <tr key={PlaceId}>
                <td>{dep.Name}</td>
                <td>{dep.Address}</td>
                <td>{dep.Ratings}</td>
                <td>{dep.w_review}</td>
                <td> <img alt={imgURL(dep.PictureID)} src={imgURL(dep.PictureID)} /> </td>
                </tr> 
                 )}
          </tbody>
      </table>
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
            <div className="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
        </div>
    </div>
    )
  }
}

function imgURL(picture_id){
  const src = `./Images/${picture_id}`;
  return src;
}