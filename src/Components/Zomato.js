import {useEffect, useState} from 'react';
import './Zomato.css'

const Zomato = (props) => {
    
    const [foodPlaces, setFoodPlaces] = useState([]);
    
    useEffect(() => {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.long}`, {
          method: 'GET', 
          headers: {
            'user-key': '028312b35cbae65d6ded8a01012928d2',
          }
        })
        .then(res => res.json())
        .then(data => setFoodPlaces(data.nearby_restaurants))
      }, [])



    return(
    <div>
      <h4>Nearby Restaurants</h4>
      <ShowData foodPlaces={foodPlaces}/>
    </div>
    );
};

export default Zomato;


const ShowData = (props) => {
  return (
    props.foodPlaces.map(rest => {
      console.log(rest.restaurant);
      return(
        <div className="restContainer">
          <h1>{rest.restaurant.name}</h1>
          <p>Cuisine Type: <br/> {rest.restaurant.cuisines}</p>
          <p>Address: <br/> {rest.restaurant.location.address}</p>
          <p>User Rating: <br/>{rest.restaurant.user_rating.rating_text}</p>
          <a href={rest.restaurant.url} target='_blank'>more info</a>
        </div>
        
      // <h1>{rest.name}</h1>
  //     <tr>
  //     <td>{pie.flavor}</td>
  //     <td>{pie.baseOfPie}</td>
  //     <td>{pie.size}</td>
  //     <td>{pie.vegan.toString()}</td>
  //     <td>{pie.hotPie.toString()}</td>
  //     <td>{pie.crust}</td>
  //   </tr>
  )
})
  )
}

