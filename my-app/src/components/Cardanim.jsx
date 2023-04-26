import React from 'react'
import './Card.css'
 
import stars from './images/stars.png'
 
 

export const Cardanim = (props) => {
  return (
    <div className="section_main"> 
    <main className='main1'>
      <section className='card'>
        <div className="product_image">
        <div className="cricle"></div>
         <img src= {props.productimage} alt="pic" />
          
        </div>
       
        
        <div class="product-info">
          <h2> {props.productId}</h2>
          <h2 className='title'>{props.Brand}</h2>
          <p>GANIGER PURE ACTIVE MICELLER {<br></br>}
          cleaning water 125ml
          </p>
          
          <h2 >{props.Price}</h2>
         
        </div>
       
        <div class="stars">
     
       <img src={stars} alt="stars" />
      </div>
      <button className='btn'>ADD TO CRAD</button>



      </section>

      
      


    </main>
    </div>
  )
}
