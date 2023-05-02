import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaBath } from "react-icons/fa";
import {FaChartArea } from "react-icons/fa";
import {FaBed } from "react-icons/fa";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import { properties } from '../mock/properties';
import ProductDetails from './ProductDetails';
import { BiShareAlt} from "react-icons/bi";


const Property = (props) => {
    const {propertyDetails}= props
  return (
    <div className='property'>
        <div className='propertyInnerContent'>
          <Card >
          {/* <Card.Img variant="top" src={propertyDetails.image} /> */}
          <Link to={`/property/${propertyDetails.id}`}>
            <Card.Img variant="top" src={propertyDetails.image} />
             <div className='shareimg'><BiShareAlt/></div>
              <div className='popular'><span>popular</span></div>

            </Link>
          <Card.Body>
            <Card.Title>{ propertyDetails.priceRange}</Card.Title>
            <Card.Text>{propertyDetails.title}<br />
            <p>{propertyDetails.owner}</p>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
             <ul className='property-list'>
                <li><FaBed/>{propertyDetails.bedroom} Bedroom</li>
                <li><FaBath/>{propertyDetails.bathroom} Bathroom</li>
                <li> <FaChartArea/>{propertyDetails.area} M</li>
             </ul>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        </div>
        <Switch>
        <Route
          path="/product/:id"
          render={({ match }) => (
            <ProductDetails
              product={properties.find(
                (product) => String(product.id) === match.params.id
              )}
            />
          )}
        />
        </Switch>
    </div>
      );
    }
    

export default Property