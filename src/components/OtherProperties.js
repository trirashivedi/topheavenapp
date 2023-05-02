import React from 'react'
import { otherprop } from '../mock/properties'
import Card from 'react-bootstrap/Card';


const OtherProperties = () => {
  return (
    <div className='OtherProperties' >
        <div className='OtherProperties-wrapper container'>
            <div className='OtherProprtyHeading'>
                <h3 className='headingbottm'>We've got properties in Ahmedabad for everyone</h3>
            </div>
        <div className='OtherProperties-pannel'>   
        {otherprop.map((val)=> 
        <div className='otherproperty-content'>
         <Card>
         <Card.Img variant="top" src={val.image} />
         <div className='otherpropertyIcon'>{val.iconimg}</div>
         <Card.Body>
           <Card.Title>{ val.priceRange}</Card.Title>
           <Card.Text>{val.value}<br />
           <p>{val.type}</p>
           </Card.Text>
           <a href='' className='otherpropertybtn'>Explore</a>
         </Card.Body>
       </Card>
       </div>
        )}
        </div>
        </div>
    </div>
  )
}

export default OtherProperties