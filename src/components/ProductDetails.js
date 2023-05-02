import React from 'react'
import Navbar from './Navbar'
import { AiOutlineHeart} from "react-icons/ai";
import { BiShareAlt} from "react-icons/bi";
import { BsPrinter} from "react-icons/bs";
import detailed1 from "../assets/images/detailedpage/detailed1.png"
import detailed2 from "../assets/images/detailedpage/detailed2.png"
import detailed3 from "../assets/images/detailedpage/detailed3.png"
import video from "../assets/images/detailedpage/video/video.png"
import person from "../assets/images/detailedpage/video/person.png"
import {FaBed } from "react-icons/fa";
import {FaBath } from "react-icons/fa";
import {GiHomeGarage } from "react-icons/gi";
import {AiOutlineAreaChart } from "react-icons/ai";
import {GiCalendarHalfYear } from "react-icons/gi";
import {AiFillPlayCircle } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import {BiPhone } from "react-icons/bi";
import {BiEnvelope} from "react-icons/bi";
import {MdOutlineHome} from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FeaturedImage from './FeaturedImage';


const ProductDetails = (props) => {
  console.log('props =>', props)
  return (
    <>
    <Navbar/>
     <div className='productDetails'>
        <div class="container">
            <div class="col-md-12">
                <div class="input-group">                    
                </div>
            </div>
        </div>
        <div className='productDetails-wrapper container'>
            {/* <div className='beadcrumb'>
                <p>Home  >  Flat > Ahmedabad > Sola</p>
            </div> */}
            <div className='productDetail-heading'>
                <div className='col-md-6'>

              <div className='product-title'>
                <h4>Swagat Afford Township In Ahmedabad </h4>
                <p>Ganesh Meridian Sola, Ahmedabad Gujarat </p>
              </div>
              </div>
              <div className='col-md-6'>
              <div className='product-socialMedia'>
                 <a><AiOutlineHeart /></a>
                 <a>< BiShareAlt/></a>
                 <a><BsPrinter/></a>
              </div>
              </div>
            </div>

            <div className='gallery-image'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='left-galleryImage'>
                            <div className='imgg'>
                            <img src={detailed1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='right-gallryImage'>
                            <div className='imgg1'>
                               <img src={detailed2}  alt="" />
                            </div>
                            <div className='imgg2'>
                               <img src= {detailed3} alt="" />
                                <a href='' className='morebtn'>+ more </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Overview'>
                <div className='overview-wrapper row'>
                    <div className='col-md-8 pr-4'>
                        <h4>Overview</h4>
                        <div className='overview-Icon '>
                            <div className=' d-flex justify-content-between align-items-center mt-4'>
                                <div className='OIcon1 text-center'>
                                    <span ><FaBed/></span>
                                    <br />
                                    <p>2 Bedrooms</p>
                                </div>
                                <div className='OIcon2  text-center'>
                                    <span><FaBath/></span>
                                    <br/>
                                    <p>2 Bathrooms</p>
                                </div>
                                <div className='OIcon3  text-center'>
                                    <span><GiHomeGarage/></span>
                                    <p>1 Garage</p>
                                </div>
                                <div className='OIcon4  text-center'>
                                    <span><AiOutlineAreaChart/></span>
                                    <p>278, M</p>
                                </div>
                                <div className='OIcon5  text-center'>
                                    <span><GiCalendarHalfYear/></span>
                                    <p>Year Built: 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className='Desciption mt-4 pt-4 pb-4 mb-4'> 
                            <h4>Desciption</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur 
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                                anim id est laborum.
                            </p>
                        </div>
                        
                        <div className='Features mt-4 pt-4 pb-4 mb-4'>
                           <h4>Features</h4>
                           <div className='features-listting'>
                            <ul className='featurs-list '>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Back yard</li>
                                <li className='col-md-4'>Electricity</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                                <li className='col-md-4'>Equipped Kitchen</li>
                            </ul>
                           </div>
                        </div>

                        <div className='Detaails mt-4 pt-4 pb-4 mb-4'>
                            <h4>Features</h4>
                            <div className='details-wrapper '> 
                               <div className='col-md-6'>
                                 <div className=" details-lists ">
                                        <span className='col-md-3'>Property ID</span>
                                        <span className='col-md-3'>AGS1234</span>
                                 </div>
                                 <div className=" details-lists">
                                        <span className='col-md-3'>Price</span>
                                        <span className='col-md-3'>₹50.10 lakh</span>
                                 </div>
                                 <div className=" details-lists">
                                        <span className='col-md-3'>Bathroom</span>
                                        <span className='col-md-3'>1</span>
                                 </div>
                                 
                               </div>
                               <div className='col-md-6'>
                               <div className=" details-lists">
                                       <span className='col-md-3'>Property Size</span>
                                        <span className='col-md-3'>278, M`</span>
                                 </div>
                                 <div className=" details-lists">
                                        <span className='col-md-3'>Bedroom</span>
                                        <span className='col-md-3'>2</span>
                                 </div>
                                 <div className=" details-lists">
                                        <span className='col-md-3'>Garage</span>
                                        <span className='col-md-3'>1</span>
                                 </div>
                               </div>
                            </div>
                        </div>

                        <div className='video mt-4 pt-4 pb-4 mb-4'>
                           <h4>Features</h4>
                            <div className='video-wrapper'>
                                <img src={video} alt="video" />
                                <div className='overlay'></div>
                                <div className='video-icon'>
                                    <AiFillPlayCircle/>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className='col-md-4'>
                        <div className='small-right-card'>
                        <Card style={{padding: 20}}>
                            <Card.Img variant="top" src={person} />
                            <Card.Body>
                            <Card.Title><h4>Anand Kumar </h4></Card.Title>
                            <Card.Text>
                            <div  className='card-content'>
                            <span><BiPhone /></span>
                            <span><p>+1 386-688-3295</p></span>
                            </div>
                            <div className='card-content'>
                            <span><BiEnvelope/></span>
                            <span><p>+1 386-688-3295</p></span>
                            </div>
                            <div className='card-content'>
                            <span><MdOutlineHome/></span>
                            <span><p>Ganesh Meridian Sola, Ahmedabad Gujarat</p></span>
                            </div>

                            <div className='small-form mt-4'>
                                <Form.Group className="mb-3 filed-item half-item" controlId="">
                                
                                <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3 filed-item " controlId="">
                                
                                <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3 filed-item" controlId="">
                                
                                <Form.Control as="textarea" rows={3}  placeholder="Your Message"/>
                                </Form.Group>
                                <Button variant="primary" type="submit" style={{"width" : "100%"}}>
                                Send message
                                </Button>
                            </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='Address-section'>
            <div className='container'>
            <h4>Address</h4>
            <p>Ganesh Meridian Sola, Ahmedabad Gujarat </p>
            </div>
            <div className='addres-map mt-4'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.678439406874!2d72.52223317423568!3d23.072247714474642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834c483edb03%3A0xcc2587611ce361e!2sGanesh%20Meridian%20Complex%2C%20Janta%20Nagar%20Ghatlodia%20Rd%2C%20Vishwas%20City%201%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sin!4v1682960266298!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div className='FeaturedImage'>
          <div className='container'>
            <div className='featured-heading'>
            <h4>Featured Properties</h4>
            <button className='btn btn-primary'>View More</button>
            </div>
            <FeaturedImage /> 
            </div>
        </div>
     </div>
    </>
  )
}

export default ProductDetails