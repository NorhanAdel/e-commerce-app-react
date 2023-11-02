import React from 'react'
import './Header.css';
import Logo from '../../assetes/logo.png'
import BiShoppingBag from 'react-icons/bi'
const Header = ()=> {
  return (
    <div className='container'>
<div className="logo">
<img src={Logo}/>
<span>amazon</span>
</div>
<div className="right">
   
<ul className='menue'>
<li>collection</li>
<li>brand</li>
<li>new</li>
<li>sales</li>
<li>end</li>
</ul>
 
    <input type='text' placeholder='search..'/>
   <i className=' fa fa-bag-shopping'></i>
</div>


    </div>
  )
}

export default Header