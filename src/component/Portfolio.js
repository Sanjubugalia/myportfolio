import React from 'react';
import portfolio1 from "../image/portfolio1.jpg" 
import portfolio2 from "../image/portfolio2.jpg"
import portfolio3 from "../image/portfolio3.jpg"
import portfolio4 from "../image/portfolio4.jpg"



function Portfolio() {
  return (
   <>
   <section id="portfolio">
     <div className='container'>
       <div className='row'>
       <h1 className='headings'>PORFOLIO </h1>
  <div className='gallery'>
    <img src={portfolio1} alt="img1"></img>
    <img src={portfolio2} alt="img1"></img>
    <img src={portfolio3} alt="img1"></img>
    <img src={portfolio4} alt="img1"></img>
    <img src={portfolio2} alt="img1"></img>
    <img src={portfolio1} alt="img1"></img>
    <img src={portfolio3} alt="img1"></img>
    <img src={portfolio2} alt="img1"></img>
    <img src={portfolio3} alt="img1"></img>
  </div>
       </div>
     </div>
  
</section>
   </>
  )
}

export default Portfolio