import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import{pagination,Navigation} from 'swiper'
import './Slider.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Img1 from '../../assetes/img1.png'
import Img2 from '../../assetes/img2.png'
import Img3 from '../../assetes/img3.png'
import Img4 from '../../assetes/img11.png'
import Img5 from '../../assetes/img5.png';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
 
const data=[
  {
    name:'SKIN',
    details:'super skin care',
imges:Img1,
price:'12$'
  },
  {
    name:'SKIN',
    details:'super skin care',
imges:Img2,
price:'45$'
  },
  {
    name:'SKIN',
    details:'super skin care',
imges:Img3,
price:'30$'
  },
  {
    name:'SKIN',
    details:'super skin care',
imges:Img4,
price:'22$'
  },
  {
    name:'SKIN',
    details:'super skin care',
imges:Img5,
price:'70$'
  },

]
const Slider = () => {
  return (
    <div>
       
       <Carousel responsive = {responsive} infinite={true} className='res-acrsuel'>
  {
    data.map((item)=>{
      return(
      <div className="content">
           <div className='swiperContainer'>
        <div className="left-side">
        <div className="name">
          <span>{item.name}</span>
          <span>{item.details}</span>
        </div>
        <span className='slide-price'>{item.price}</span>
        <div className='shop'>shop now</div>
        </div>
        <img src={item.imges} className='img-product'/>
        </div>
      </div>
      )
    })
  }
          </Carousel>
    </div>
  )
}

export default Slider