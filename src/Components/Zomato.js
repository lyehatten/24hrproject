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
    <div className="zomatoApp">
      <h2>Nearby Restaurants</h2>
      <div className='results'>
      <ShowData foodPlaces={foodPlaces}/>
      </div>
    </div>
    );
};

export default Zomato;


const ShowData = (props) => {
  return (
    props.foodPlaces.map(rest => {
      return(
        <div className="restContainer">
          <h1>{rest.restaurant.name}</h1>
          <p><b>Cuisine Type:</b><br/> {rest.restaurant.cuisines}</p>
          <p><b>Address:</b><br/> {rest.restaurant.location.address}</p>
          <p><b>User Rating:</b><br/>{rest.restaurant.user_rating.rating_text}</p>
          <a href={rest.restaurant.url} target='_blank'>More Info</a>
        </div>
        

  )
})
  )
}

