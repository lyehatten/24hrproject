// import {useEffect, useState} from 'react';

const NasaImage = (props) => {

    console.log(props)
 
    var today = new Date();
    var inputDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log("inputDate:",inputDate);
 
    const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
    let apiKey = 'BrjpVmZ1TEcej28c942Hi8qKMEUNe67GU9n34Hui';
    let finalURL =  baseURL + '?lon=' + props.long + '&lat=' + props.lat + '&' + 'date=' + '2020-10-01' + '&dim=0.15&' + 'api_key=' + apiKey; 
     
    // useEffect(() => {
    //     fetch(finalURL, {
    //       method: 'GET'                  
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //   }, [])    
       
    return (  
        <div className="NASAImg">
         {/* <a href={finalURL} target="_blank">NASA Image</a> */}  
         <img src={finalURL} className="satImg"/>    
        </div>
  )  
}

export default NasaImage;