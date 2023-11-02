import React from 'react'
import './Footer.css'
import Logo from '../../assetes/logo.png'
import { BiLink, BiLocationPlus, BiLogIn, BiMailSend, BiPhone, BiUser } from 'react-icons/bi'
 
  
 
const Footer = ()=> {
  return (
    <div className='footer-wrapper'>
        <hr/>
        <div className="container-footer">
            <div className="clogo">
                <img src={Logo}/>
                <span>amazon</span>
            </div>
            <div className="blocks">
<div className="details">
    <span>contact us</span>
    <span className='pngLine'>
        <BiLocationPlus className='icons'/>
        <span>111 north avenue Orlando, fl 325G1</span>
    </span>
    <span className='pngLine'>
        <BiPhone className='icons'/>
        <span>0259752497</span>
    </span>
    <span className='pngLine'>
        <BiMailSend className='icons'/>
        <span>na9111353@gmail.com</span>
    </span>
</div>
            </div>
            <div className="blocks">
<div className="details">
    <span>acount</span>
    <span className='pngLine'>
        <BiLogIn className='icons'/>
        <span>sign in</span>
    </span>
    
</div>
            </div>
            <div className="blocks">
<div className="details">
    <span>company</span>
    <span className='pngLine'>
        <BiUser className='icons'/>
        <span>about us</span>
    </span>
    
</div>
            </div>
            <div className="blocks">
<div className="details">
    <span>resource</span>
    <span className='pngLine'>
        <BiLink className='icons'/>
        <span>safty privacy & terms</span>
    </span>
   
</div>
            </div>
        </div>
        <div className="copyright">
            <span>copyright &copy;2022 by amazon</span>
            <span>all right reserved</span>
        </div>
    </div>
  )
}

export default Footer