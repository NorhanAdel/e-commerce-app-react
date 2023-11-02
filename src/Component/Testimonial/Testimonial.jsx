import React from 'react'
import  './Testimonial.css'
import Hero from '../../assetes/testimonialHero.png'
import Carousel from 'react-multi-carousel';
import Img1 from '../../assetes/profile1.png'
import Img2 from '../../assetes/profile1.png'
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

  const TestimonialData=[
    {
name:'adriana',
comment:'Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet  sit amet consectetur adipisicing dolor sit amet.',
imge:Img1,
    },{
        name:'adriana',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet  sit amet consectetur adipisicing dolor sit amet.',
        imge:Img2,
    },
    {
      name:'adriana',
      comment:'Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet  sit amet consectetur adipisicing dolor sit amet.',
      imge:Img1,
          },{
              name:'adriana',
              comment:'Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet  sit amet consectetur adipisicing dolor sit amet.',
              imge:Img2,
          },
  ]
const Testimonial = ()=> {
  return (
    <div>
    <div className="testimonial">
     <div className="wrapper">
 <div className="testimonial-container">
 <span>Top Rated</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet .</span>
 </div>
        </div>
        <img src={Hero}/>
        <div className="testimonial-content">
            <span>100k</span>
            <span>Happy Customer With Us</span>
        </div>
    
  
    </div>
    <div className="testimonial-swipper">
        <Carousel responsive = {responsive} infinite={true} className='test-carsoul'>
            {
                TestimonialData.map((item)=>{
                 return(
                    <div className="testimonials">
                    <img src={item.imge} alt=''/>
                    <span>{item.comment}</span>
                    <hr/>
                    <span>{item.name}</span>
                </div>
                 )
                })
            }
            </Carousel>
            </div>
    </div>
  )
}

export default Testimonial