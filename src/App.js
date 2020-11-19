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
  })
}


getLocation();

  return (
    <div className="App">
      <h1>Location Details</h1>


      <p>lat: {lat} long: {long}</p>
      <br/>
      {/* <NasaImage lat={lat} long={long}/> */}
      <br/>
      {/* <Weather lat={lat} long={long}/> */}
      <br/>
      <Zomato lat={lat} long={long}/>
    </div>
  );

}

export default App;
