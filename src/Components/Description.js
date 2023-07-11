import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {useNavigate, useParams } from'react-router-dom'

const Description = ({movie}) => {
    const x = useParams();
    console.log('movie',movie);

    let filteredArray = movie.filter((el)=> el.name === x.name);
    console.log('filteredArray=',filteredArray);
    const navigate=useNavigate(); 
    
return (    
<div>
     {filteredArray.map((movie)=>{return (<div> 
      <iframe
        width="90"
        height="507"
        src={movie.trailer}
        title="Star Wars: The Force Awakens Trailer (Official)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>     
        <Card>
        <Card.Header as="h5">{movie.name}</Card.Header>
          <Card.Body>
           
            <Card.Title style={{color:"red"}}>{movie.rating}</Card.Title>

            <Card.Text>
            {movie.id} 
            {movie.description}
            {movie.raiter}
         
            </Card.Text>
           
             <Button variant="primary" onClick={()=>navigate('/')} >Go Back</Button> 
          </Card.Body>
        
          </Card>
          </div>)
})}
</div>
)
     }
export default Description