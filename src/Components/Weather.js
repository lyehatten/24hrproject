import  {useState, useEffect} from 'react';





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
    
console.log(info.weather.description)

    return(
    <div>
      {/* <ShowData weather={weather}/> */}
      <button onClick={toggleCelsius}>Celsius</button>
      <button onClick={toggleFahrenheit}>Fahrenheit</button>
  {tempUnit !== true ? <p>Celsius: {temp.temp}</p> : <p>Fahrenheit: {currentWeather.temp}</p>}
      <p>{info.name}</p>

     
    
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

