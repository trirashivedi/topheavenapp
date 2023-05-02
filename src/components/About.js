import React from 'react'
import AboutImg from '../assets/images/abouut.png';
import About1 from "../assets/images/about/about1.png"
import About2 from "../assets/images/about/about2.png"
import About3 from "../assets/images/about/about3.png"
import About4 from "../assets/images/about/about4.png"
import {GrHomeRounded} from "react-icons/gr";


const About = () => {
  return (
    <div className='about'>
        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
                <div className='about-image'>
                    <img src={AboutImg} alt="about" />
                    <div className='image-container'>
                        <div className='image-inner'>
                            <p>10K Customers Love it!</p>
                            <div className='image-wrapper'>
                                <img src={About1} alt='about'/>
                                <img src={About2} alt='about'/>
                                <img src={About3} alt='about'/>
                                <img src={About4} alt='about'/>
                            </div>
                        </div>
                        
                    </div>
                    <div className='about-home-icon'>
                             <GrHomeRounded/>
                        </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='about-content'>
                    <h3>We Help You to <br/>
                        Find Best Properties</h3>
                    <p className='about-desc'>TopHaven is a full stack service provider for all real estate needs,
                         with 15+ services including home loans, pay rent, packers and movers, 
                         legal assistance, property valuation, and expert advice.
                    </p>
                    <button className='btn btn-primary'> Find Our Agent</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About