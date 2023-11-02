import React, { useState } from 'react'
import './Product.css'
import plan from '../../assetes/plane.png'
import Img1 from '../../assetes/img1.png'
import Img2 from '../../assetes/img2.png'
import Img3 from '../../assetes/img3.png'
import Img4 from '../../assetes/img11.png'
import Img5 from '../../assetes/img5.png';
import  Img6 from '../../assetes/img12.png'
import Img7 from '../../assetes/img13.png'
import Img8 from '../../assetes/img14.png'
import Img9 from '../../assetes/img8.png'
import Img10 from '../../assetes/img7.png'
import Img11 from '../../assetes/img10.png'
const ProductData =[
    {
        name:'SKIN',
    details:'super skin care',
imges:Img1,
type:'skin care',
price:'12$'
  },
  {
    name:'SKIN',
    details:'super skin care',
imges:Img2,
type: 'skin care',
price:'45$'
  },
  {
    name:'SKIN',
    details:'super skin care',
imges:Img3,
type:'skin care',
price:'30$'
  },
  {
    name:'conditonaires',
    details:'super skin care',
imges:Img11,
type:'conditonaires',
price:'22$'
  },
  {
    name:'SKIN',
    details:'super skin care',
imges:Img5,
type:'skin care',
price:'70$'
  },
  {
    name:'conditonaires',
    details:'super skin care',
imges:Img9,
type:'conditonaires',
price:'30$'
  },
  {
    name:'SKIN',
details:'super skin care',
imges:Img1,
type:'skin care',
price:'12$'
},
{
name:'foundation',
details:'super skin care',
imges:Img4,
type:'foundation',
price:'22$'
},
{
    name:'foundation',
details:'super skin care',
imges:Img8,
type:'foundation',
price:'12$'
},
{
name:'conditonaires',
details:'super skin care',
type:'conditonaires',
imges:Img10,

price:'45$'
},
{
    name:'foundation',
    details:'super skin care',
imges:Img7,
type:'foundation',
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
  {
    name:'foundation',
    details:'super skin care',
imges:Img6,
type:'foundation',
price:'30$'
  },
  {
    name:'SKIN',
details:'super skin care',
imges:Img1,
price:'12$'
},
]
const Product = ()=> {
    const[menueproduct,setmenueproduct]=useState(ProductData)
    const filter = (type)=>{
        setmenueproduct(ProductData.filter((product)=>product.type ===type))
    }
  return (
    <div className='product-container'>
<img src={plan}/>
<h1>our feature product</h1>
<div className="product">
    <ul className='product-menue'>
<li onClick={()=>setmenueproduct(ProductData)}>all</li>
<li onClick={()=>filter('skin care')}>skin care</li>
<li  onClick={()=>filter('conditonaires')}>conditonaires</li>
<li  onClick={()=>filter('foundation')}>foundation</li>
 
    </ul>
    <div className="list">
{
menueproduct.map((item)=>{
    return(
<div className="products">
<div className="left-side">
        <div className="name">
          <span>{item.name}</span>
          <span>{item.details}</span>
        </div>
        <span className='slide-price'>{item.price}</span>
       
        </div>
        <img src={item.imges} className='img-product'/>
        
    
</div>

    )
})
}
    </div>
</div>
    </div>
)}
export default Product