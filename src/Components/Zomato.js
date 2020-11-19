import {useEffect, useState} from 'react';

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
      <ShowData foodPlaces={foodPlaces}/>
      <p>hi</p>
    </div>
    );
};

export default Zomato;


const ShowData = (props) => {
  return (
    props.foodPlaces.map(rest => {
      console.log(rest);
      return(
        <div>
          <h1>nearby restaurants</h1>
          <h1>{rest.R.name}</h1>
        </div>
        
      // 
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

