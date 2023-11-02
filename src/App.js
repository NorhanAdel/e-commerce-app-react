 
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Product from './Component/Product/Product';
import Slider from './Component/Slider/Slider';
import Testimonial from './Component/Testimonial/Testimonial';
import Virtuals from './Component/Virtual/Virtuals';

function App() {
  return (
    <div className="App">
 <Header/>
 <Hero/>
 <Slider/>
 <Virtuals/>
 <Product/>
 <Testimonial/>
 <Footer/>
    </div>
  );
}

export default App;
