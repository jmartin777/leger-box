const acquireInfo = () => {
    return fetch('http://localhost:3001/sightings/')
    .then(response => {
        if(!response.ok) {
          throw new Error("Failed to fetch sightings");
      }
      return response.json()
     })
  }

export const updateInfo = (dataIn) => {
    //console.log(dataIn)
    fetch('http://localhost:3001/sightings/', {
        method: 'POST',
        body: JSON.stringify(dataIn),
        headers: {"Content-Type": "application/json"}
        
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));

};

export const deleteTrip=(tripID)=>{
    
    return fetch('http://localhost:3001/sightings/'+tripID, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },
        
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      
    
}
  
export default acquireInfo;