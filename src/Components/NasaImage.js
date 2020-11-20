const NasaImage = (props) => {

   
    let numDays = 10; 
    let date = ( function(){this.setDate(this.getDate()-numDays); return this} )
               .call(new Date);

    var dateStr = date.toISOString().slice(0,10);


    const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
    const apiKey = "BrjpVmZ1TEcej28c942Hi8qKMEUNe67GU9n34Hui";
    
    let finalURL =  `${baseURL}?lon=${props.long}&lat=${props.lat}&date=${dateStr}&dim=0.15&api_key=${apiKey}`; 
    console.log('finalURL',finalURL);
     
    return (  
        <div className="NASAImg">
         <h2>NASA Satellite <br/>Image</h2>
         <img src={finalURL} className="satImg"/>    
        </div>
    )  
}

export default NasaImage;