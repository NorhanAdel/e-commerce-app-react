import React from 'react'
import './Hero.css'
import HERO from '../../assetes/hero.png'
const Hero = ()=> {
  return (
    <div className="hero-container"> 
    <div className='h_side'>
<span className="text1">skin protection cream</span>
<div className='text2'>
    <span>trendy collection</span>
    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga praesentium ipsa laboriosam architecto.</span>
</div>
</div>
<div className="wrapper">
    <div className="blue-circle">
<img src={HERO} alt=''/>
</div>
<div className="cart">
<i className=' fa fa-bag-shopping' id='shopping'></i>
 
<div className="signup">
    <span>best signup offers</span>
 
<div>
<i class="fa fa-arrow-right"></i>
</div>
    </div>
    </div>
    </div>
<div className="h-sides">
    <div className="traffices">
        <span>1.5em</span>
        <span>montholy traffics</span>
    </div>
    <div className="customer">
        <span>100k</span>
        <span>happy customer</span>
    </div>
</div>
   
    </div>
  )
}

export default Hero