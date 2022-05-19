import React from 'react';
import bannerimg from "../image/resizeportfoliobanner.jpg"


function Home() {
  return (
   <>
   
   <div className='conatiner-fluid' id='home'>
   <div className='divstye'>
<img src={bannerimg} className='imgstyle'></img>
   </div>
   </div>
    </>
  )
}

export default Home