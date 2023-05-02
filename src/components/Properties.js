import React from 'react'
import PaginationProperty from '../components/PaginationProperty';
import {properties} from "../mock/properties"
import Property from './Property'

const Properties = () => {
  return (
    <div className='property_detail_wrapper'>
            {properties.map(value=> <Property propertyDetails= {value} />)}
            <PaginationProperty />
    </div>
  )
}

export default Properties