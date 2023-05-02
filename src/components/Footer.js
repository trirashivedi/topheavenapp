import React from 'react'
import footerImg from "../assets/images/footer/Vector.png";
import { FaFacebookF} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaYoutube} from 'react-icons/fa';



const Footer = () => {
  return (
    <>
   
    <div className='footer'>
       <div className='container'>
           <div className='row'>
               <div className='col-md-3'>
                  <div className='footer-widget1'>
                     <div className='footer-logo d-flex justify-content-start align-items-center mb-2'>
                        <img src={footerImg} alt="footer image" />
                         <p>Top Haven</p>
                     </div>
                     <aside className='footercon'>TopHaven is a full stack service provider for all real estate needs, 
                        with 15+ services including home loans, property valuation, expert advice.
                     </aside>

                     <div className='social-media'>
                        <a href=''><FaFacebookF /></a> 
                        <a href=''><FaTwitter /></a>
                        <a href=''><FaInstagram /></a>
                        <a href=''><FaYoutube/></a>
                     </div>
                  </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-widget2'>
                        <aside>Link</aside>
                        <ul className='footer-links'>
                            <li><a>Sales Enquiry Buy  </a></li>
                            <li><a>Terms & Conditions  </a></li>
                            <li><a>Privacy Policy  </a></li>
                            <li><a>Blog </a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-widget3'>
                        <aside>About</aside>
                        <ul className='footer-links'>
                            <li><a>Testimonials </a></li>
                            <li><a>Feedback </a></li>
                            <li><a>Help Center</a></li>
                            <li><a>Our Services</a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='footer-widget4'>
                        <aside>Contact</aside>
                         <p>N/901, Ganesh Meridian Sarkhej, Ahmedabad Gujarat 380060</p>
                         <p>Email: inquiry@tophaven.com</p>
                         <p>+91 123 123 4567</p>
                    </div>
                </div>
           </div>
       </div>
       
    </div>
    <div className='copyright-container'>
         <div className='copyright text-center'>
            <p>@2022 TopHaven. All rights reserved.</p>
         </div>
         </div>
    </>
  )
}

export default Footer