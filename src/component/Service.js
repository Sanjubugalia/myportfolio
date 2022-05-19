import React from 'react';


function Service() {
  return (
    <>
      <section id="service">
        <h1 className='headings'>SERVICES</h1>
        <div className="container">
          <div className='row'>
            <div className='col'>
             <div className='box'>
            {/* <h1 className='headings'> Web Development</h1> */}
            
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
           
              </div>
              <div className="col" >
              <div className='box'>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                    </div>
                    </div>

            </div>
         </div>
        </div>
      </section>

    </>
  )
}

export default Service