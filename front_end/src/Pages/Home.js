import React, {Component} from 'react'; 

import Earls from './Images/Earls.png'
import Metrotown from './Images/Metrotown.png'
import Tastys from './Images/Tastys.png'

export class Home extends Component{
  render () {
      return(
      <div class="p-10 text-center bg-white">
      <h1 class="mb-3 text-success">Come travel the beautiful city of Vancouver and it's surrounding cities.</h1>
      <h4 class="mb-5">Some of the developer's favourite places to visit are:</h4>
      <div class="bg-white">

        <h3 class = "text-success"> Earls Kitchen + Bar </h3>
        <h5 class = "mb-4"> A casual restaurant to catch up with friends for some drinks or end the night after exploring the city with Modern Canadian cuisine.</h5>
        <div class="container-fluid">
          <div class="row">
            <img src = {Earls} alt="Earls" class = "col-md-6" href = "#" width="500" height = "500" />
            <div class="col-md-3">
              <h5> Earls Kitchen + Bar</h5>
              <h5> 6070 Silver Dress Burnaby, BC</h5>
              <h5> V5H 0H5</h5>
              <h5> Dress Code: Casual</h5>
              <h5> Cuisine: Modern Canadian Cuisine</h5>
            </div>
            <p class ="mb-5 text-secondary"> Image Source: https://earls.ca/locations/station-square/</p>
          </div>
        </div>

        <h3 class = "text-success"> Metropolis at Metrotown </h3>
        <h5 class = "mb-4"> With over 300 stores, there is variety of shops to find the next item to add to your closet.</h5>
        <div class="container-fluid">
          <div class="row">
            <img src = {Metrotown} alt="Metrotown" class = "col-md-6" href = "#" width="500" height = "500" />
            <div class="col-md-3">
              <h5> Metropolis at Metrotown</h5>
              <h5> 4700 Kingsway, Burnaby, BC</h5>
              <h5> V5H 4M5</h5>
              <h5> Favourite Shops: Oak and Fort, Garage, Sephora</h5>
            </div>
            <p class="mb-5 text-secondary"> Image Source: By GoToVan from Vancouver, Canada - Metropolis at Metrotown, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=80892757</p>
          </div>
        </div>

        <h3 class = "text-success"> Tasty Indian Bistro </h3>
        <h5 class = "mb-4"> Try out a variety of Indian dishes surrounded by a beautiful interior.</h5>
        <div class="container-fluid">
          <div class="row">
            <img src = {Tastys} alt="Tastys" class = "col-md-6" href = "#" width="500" height = "500" />
            <div class="col-md-3">
              <h5> Tasty Indian Bistro</h5>
              <h5> 8295 120 St, Delta, BC</h5>
              <h5> V4C 6R1</h5>
              <h5> Dress Code: Casual</h5>
              <h5> Cuisine: Indian</h5>
            </div>
            <p class="mb-5 text-secondary"> Image Source: https://www.opentable.ca/r/tasty-indian-bistro-delta</p>
          </div>
        </div>
    </div>
    <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
            <div class="text-white mb-3 mb-md-0">Simran Nijjar and Sirpreet Dhillon</div>
        </div>
    </div>
    )
  } 
  
}