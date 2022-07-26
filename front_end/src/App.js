import logo from './Pages/Images/Travel-Van-Logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importing all the pages for travelVan
import {SignIn} from "./Pages/SignIn";
import {CreateAccount} from "./Pages/CreateAccount";
import {Restaurants} from "./Pages/Restaurants";
import {Parks} from "./Pages/Parks";
import {Clubs} from "./Pages/Clubs";
import {Malls} from "./Pages/Malls";
import {MedicalServices} from "./Pages/MedicalServices";
import {Home} from './Pages/Home';
import {MyAccount} from './Pages/MyAccount';

// modules for routing
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <BrowserRouter>

      {/* NAV BAR */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
            TravelVan
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/signin">Sign In</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Home">Home</a>
              </li>

              

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/Restaurants" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Restaurants
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      
      
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Restaurants" element={<Restaurants />} />
            <Route path="/Parks" element={<Parks />} />
            <Route path="/Clubs" element={<Clubs />} />
            <Route path="/Malls" element={<Malls />} />
            <Route path="/MedicalServices" element={<MedicalServices />} />
            <Route path="/MyAccount" element={<MyAccount />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

