const NasaImage = (props) => {

    console.log(props)
   
    let numDays = 10; 
    let date = ( function(){this.setDate(this.getDate()-numDays); return this} )
               .call(new Date);
    console.log('date',date);

    var dateStr = date.toISOString().slice(0,10);
    console.log('dateStr',dateStr);

    const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
    const apiKey = "BrjpVmZ1TEcej28c942Hi8qKMEUNe67GU9n34Hui";
    
    let finalURL =  `${baseURL}?lon=${props.long}&lat=${props.lat}&date=${dateStr}&dim=0.15&api_key=${apiKey}`; 
    console.log('finalURL',finalURL);
     
    return (  
        <div className="NASAImg">
          <h3>NASA Image</h3>
          <img src={finalURL} width="70%"/>    
        </div>
    )  
}

export default NasaImage;