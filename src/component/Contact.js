import React from 'react';


function Contact() {
  return (
    <>

      <section id="contact">
        <h1 className="headings"> Contact us</h1>
        <div className='formdiv'>
          <form >
              <input type="name" className='inputclass' placeholder="name" />         
              <input type="email" className='inputclass' placeholder="email@example.com" />
              <textarea className='textarea' rows="5" placeholder='Message' /><br/>
              <button className='contact-btn'> Submit</button> 
        </form>
        </div>
      </section>
    </>
  )
}

export default Contact