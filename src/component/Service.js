import React from 'react';
import {Card,Button} from "react-bootstrap"


function Service() {
  return (
    <>
      <section id="service">
        <h1 className='headings'>SERVICES</h1>
        <div className="container">

  <div className="row align-items-end">
    <div className="col">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Web Design</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>
</Card>
    </div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Web Development</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
    </div>
    <div className="col">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Hosting</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
    </div>
  </div>
</div>
      </section>

    </>
  )
}

export default Service