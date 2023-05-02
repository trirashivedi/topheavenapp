import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <div className='contact'>
        <div className='frontContact'>
            <div className='contact-heading text-center'>
                <h3>Contact Us</h3>
            </div>
            <div className='contact-wrapper'>
            <Form>
                <div className='row contact-row'>
                    <Form.Group className="mb-3 filed-item half-item" controlId="">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="Input your first name in here" />
                    </Form.Group>

                    <Form.Group className="mb-3 filed-item half-item" controlId="">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Input your last name in here" />
                    </Form.Group>
                </div>
                <div className='row'>
                    <Form.Group className="mb-3 filed-item " controlId="">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Input your email in here" />
                    </Form.Group>
                </div>
      
                <div className='row'>
                    <Form.Group className="mb-3 filed-item" controlId="">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Write your messages in here"/>
                    </Form.Group>
                </div>
                <div className=''>
                    <Button variant="primary" type="submit" >
                       Send message
                    </Button>
                </div>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default Contact