import React from 'react';
import about from "../image/aboutimg.jpg"

function About() {
  return (
   <>
    <section id="about">
      <div className="container">
  <div className="row align-items-end">
  <h1 className='headings'> ABOUT ME</h1>
 
  <div className="col-md-5" id="pic">
         <img src={about} alt='about'/> 
    </div>
    <div className="col-md-7">
    <div id='intro'>
           <h2> Pooja Bugalia</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae in dicta, neque rerum iste eos repudiandae vero 
              minima non! Nostrum iusto illum perspiciatis. Nisi, repudiandae. 
              Soluta molestias iste dolorum deleniti culpa maxime tempore quos, 
              aperiam est quis ab repudiandae excepturi exercitationem optio esse,
               aliquid distinctio accusantium nostrum, tempora enim! Veniam nobis
                dolorum exercitationem sapiente doloremque ipsa expedita
                , repellendus optio aliquam quaerat velit beatae 
                facilis non fugit tenetur saepe possimus rerum tempore ad, 
                nemo mollitia? Itaque voluptates hic iste quia et totam sapiente
                 laudantium explicabo dignissimos deleniti eos temporibus, expedita 
                 rerum dicta quae nobis debitis reprehenderit eveniet vero corporis ipsum cum!</p>
         </div>
    </div>   
 


  </div>
   
         </div>
      
     </section>
   </>
  )
}

export default About