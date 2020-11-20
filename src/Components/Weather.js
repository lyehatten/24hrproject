import  {useState, useEffect} from 'react';
import { Button } from 'reactstrap';




const Weather = (props) => {




const [currentWeather, setCurrentWeather] = useState([])
const [info, setInfo] = useState([])
const [temp, setTemp] = useState([])
const [tempUnit, setTempUnit] = useState([])
    
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=59c55799b3fefadca59ee4f04ef07330&units=imperial`, {
            method: 'GET'
        }
        )
        .then(res => res.json())
        .then(data => setCurrentWeather(data.main))
      }, [])

      useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=59c55799b3fefadca59ee4f04ef07330`, {
            method: 'GET'
        }
        )
        .then(res => res.json())
        .then(data => setInfo(data))
      }, [])
      useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=59c55799b3fefadca59ee4f04ef07330&units=metric`, {
            method: 'GET'
        }
        )
        .then(res => res.json())
        .then(data => setTemp(data.main))
      }, [])



        const toggleCelsius = () => {      
            setTempUnit(true)
        }
        
        const toggleFahrenheit = () => {
            
            setTempUnit(false)
        }
    

    return(
    <div className="weatherApp">
        <h2>{info.name} Weather</h2>
        {tempUnit === true ? <p><b>Current Temperature:</b> <br/>{temp.temp}˚C</p> : <p><b>Current Temperature: </b><br/> {currentWeather.temp}˚F</p>}
        <button className="btn" onClick={toggleCelsius}>Celsius</button>
        <button className="btn" onClick={toggleFahrenheit}>Fahrenheit</button>
        {/* {info.weather[0].description !== undefined ? <p>{info.weather[0].description}</p> : null} */}
        <p><strong>Humidity:</strong> <br/> {temp.humidity}%</p>
     
    
    </div>
    );
};


export default Weather;



// const ShowData = (props) => {
//   return (
//     props.weather.map(rest => {
//       console.log(rest);
//       return(
//         <div>
//           <h1>nearby_restaurants</h1>
//         </div>
        
//   )
// })
//   )
// }

