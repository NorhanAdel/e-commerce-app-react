import React from 'react'
import './Virtual.css'
import Shade from '../../assetes/shade.png'
import ReactCompareImage from 'react-compare-image'
import before from '../../assetes/before.png';
import after from '../../assetes/after.png';
const Virtuals = ()=> {
  return (
    <div className='virtuals'>
        <div className="left">
            <span>virtual try-on</span>
            <span>never buy wrong shade again</span>
            <span>try now!</span>
            <img src={Shade}/>
        </div>
        <div className="right">
 <div className="wrapper">
 <ReactCompareImage leftImage={before}
  rightImage={after}/>
 </div>
        </div>
    </div>
  )
}

export default Virtuals