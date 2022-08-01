import logo from './Pages/Images/Travel-Van-Logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importing all the pages for travelVan
import {SignIn} from "./Pages/SignIn";
import {CreateAccount} from "./Pages/CreateAccount";
import {Restaurants} from "./Pages/Restaurants";
import {Parks} from "./Pages/Parks";
import {Clubs} from "./Pages/Clubs";
import {Concerts} from "./Pages/Concerts";
import {Malls} from "./Pages/Malls";
import {MedicalServices} from "./Pages/MedicalServices";
import {Home} from './Pages/Home';
import {MyAccount} from './Pages/MyAccount';
import {PublicTransport} from './Pages/PublicTransport';
import {PrivateTransport} from './Pages/PrivateTransport';
import {EmergencyMedicalService} from './Pages/EmergencyMedicalService';
import {NonEmergencyMedicalService} from './Pages/NonEmergencyMedicalService';
import {RecreationCenters} from './Pages/RecreationCenters';
import {Transport} from './Pages/Transport';
import {DeleteAccount} from './Pages/DeleteAccount';
import {Reviews} from './Pages/Reviews';
import {UpdatePhone} from './Pages/UpdatePhone';
import {RestaurantDressCode} from './Pages/RestaurantDressCode';
import {ClubName} from './Pages/ClubName';
import {ClubAddress} from './Pages/ClubAddress';
import {ClubFee} from './Pages/ClubFee';
import {ConcertMin} from './Pages/ConcertMin';
import {ConcertMax} from './Pages/ConcertMax';

// modules for routing
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <BrowserRouter>

      {/* NAV BAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/Home">
          <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
            TravelVan
        </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/SignIn">Sign In</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/CreateAccount">Create Account</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Restaurants">Restaurants</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Transport">Transport</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/MedicalServices">Medical Services</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/RecreationCenters">RecreationCenters</a>
              </li>

              {/* Clubs */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Clubs">Clubs</a>
              </li>
              {/* Parks */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Parks">Parks</a>
              </li>
              {/* Malls */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Malls">Malls</a>
              </li>
              {/* Concerts */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Concerts">Concerts</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/MyAccount">My Account</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Reviews">Reviews</a>
              </li>


            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Restaurants" element={<Restaurants />} />
            <Route path="/Parks" element={<Parks />} />
            <Route path="/Concerts" element={<Concerts />} />
            <Route path="/Clubs" element={<Clubs />} />
            <Route path="/Malls" element={<Malls />} />
            <Route path="/MedicalServices" element={<MedicalServices />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/PublicTransport" element={<PublicTransport />} />
            <Route path="/PrivateTransport" element={<PrivateTransport />} />
            <Route path="/EmergencyMedicalService" element={<EmergencyMedicalService />} />
            <Route path="/NonEmergencyMedicalService" element={<NonEmergencyMedicalService />} />
            <Route path="RecreationCenters" element={<RecreationCenters />} />
            <Route path="Transport" element={<Transport />} />
            <Route path="DeleteAccount" element={<DeleteAccount />} />
            <Route path="UpdatePhone" element={<UpdatePhone />} />
            <Route path="RestaurantDressCode" element={<RestaurantDressCode />} />
            <Route path="ClubName" element={<ClubName />} />
            <Route path="ClubAddress" element={<ClubAddress />} />
            <Route path="ClubFee" element={<ClubFee />} />
            <Route path="ConcertMin" element={<ConcertMin />} />
            <Route path="ConcertMax" element={<ConcertMax />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;

