import React from 'react';
import {Form,Button} from "react-bootstrap"

function Contact() {
  return (
    <>

      <section id="contact">
        <div className='container-fluid'>
        <h1 className="headings"> Contact us</h1>
        <div className="container">
          <div className='row'>
            <div className='col-md-8 mx-auto'>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="outline-light contact-btn">Submit</Button>{' '}
</Form>
        </div>
        
        </div>
        </div>

        </div>
      </section>
    </>
  )
}

export default Contact