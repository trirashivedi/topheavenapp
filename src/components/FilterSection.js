import React from 'react'
import Button from 'react-bootstrap/Button';
const FilterSection = () => {
  return (
    <div className='filterContainer'>
        <div className=' FilterContainerWrapper'>
        <div className='container'>
             <div className='filter-innercontent'>
                <ul className='d-flex filter-content' >
                    <li>
                        <label>Location</label>
                        <p >Sola, Ahemdabad</p>
                        </li>
                    <li><label>Budget</label>
                      <select>
                        <option>₹ 50L-75L</option>
                        <option>₹ 75L-1cr</option>
                        <option>₹ 1cr-2cr</option>
                        <option>₹ 2cr-5cr</option>
                      </select>
                    </li>
                    <li><label>BHK</label>
                      <select>
                        <option>1 BHK Flat</option>
                        <option>2 BHK Flat</option>
                        <option>3 BHK Flat</option>
                        <option>4 BHK Flat</option>
                      </select>
                    </li>
                    <li><label>Property Type</label>
                      <select>
                        <option>Flat</option>
                        <option>Land</option>
                      </select>
                    </li>
                    <li><label>Posted By</label>
                      <select>
                        <option>Owners</option>
                        <option>Ads</option>
                      </select>
                    </li>
                    <li><label>More</label>
                      <select>
                        <option>More Filters</option>
                      </select>
                    </li>
                    <li> <Button variant="primary">Search</Button> </li>
                </ul>
             </div>
        </div>
        </div>
    </div>
  )
}

export default FilterSection