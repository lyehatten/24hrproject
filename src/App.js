import {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NasaImage from './Components/NasaImage';
import Weather from './Components/Weather';
import Zomato from './Components/Zomato';


function App() {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

function getLocation(){
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  } )
}

getLocation();
  
  return (

    <div className="App">
      <h1>Find Info on Your Location!</h1>
      <br/>
      {lat !=="" && long!=="" ? <NasaImage lat={lat} long={long}/> : <p>Location not Available! Please accept request for location access!</p>} 
      <br/>
      {/* {lat !=="" && long!=="" ? <Weather lat={lat} long={long}/> : null} */}
      <br/>
      {/* {lat !=="" && long!=="" ? <Zomato lat={lat} long={long}/> : null} */}
    </div>
  );

}

export default App;


