import React from 'react'
import Blog1 from '../assets/images/Blog/blog1.png';
import Blog2 from '../assets/images/Blog/blog2.png';
import Blog3 from '../assets/images/Blog/blog3.png';

const Blog = () => {
  return (
    <div className='Blog'>
        <div className='blogWrapper-inner '>
            <div className='container'>
                <div className='blogHeading'>
                    <h3 className='headingbottm'>From Our Blog</h3>
                </div>
                <div className='row blogWrapper'>
                    <div className='col-md-4'>
                        <div className='blogImage'>
                            <img src={Blog1} />
                            <div className='blogContent'>
                                <p className='blog-title'>5 Benefits of Buying a New Construction Home</p>
                                <p className='blog-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <a href='' className='primary'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='blogImage'>
                            <img src={Blog2} />
                            <div className='blogContent'>
                                <p className='blog-title'>10 Benefits Of Rentals That May Change Your Perspective</p>
                                <p className='blog-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <a href='' className='primary'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='blogImage'>
                            <img src={Blog3} />
                            <div className='blogContent'>
                                <p className='blog-title'>What’s in a Sales Contract? Insights from a Seasoned</p>
                                <p className='blog-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                <a href='' className='primary'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog