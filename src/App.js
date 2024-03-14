import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'; 
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Ourfood from './pages/Ourfood';
import Services from './components/Services';
import CookieBanner from './components/Cookies';
import NotFound from './pages/NotFound';
import Scroll from './components/Scroll';
import OurfoodInfo from './pages/OurfoodInfo';
import foods from './components/foodsData'
import Faq from './pages/Faq';
import Partners from './pages/Partners';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (

         <BrowserRouter>

         <div className='App'>
         <meta
      name="description"
      content="Spara tid och pengar med färdiga matlådor som levereras till jobbet! Njut av god mat och håll energin uppe under hela dagen!"
    />
         <ScrollToTop />
         <Navbar />
           <div className='content'>
             <Routes>
              <Route path='/' element={<Home />} />
               <Route path='/ourfood' element={<Ourfood />} />
               <Route path='/ourfood/:id' element={<OurfoodInfo foods={foods}/>} />
                <Route path='services' element={<Services />} /> 
                <Route path='about' element={<About />} /> 
                <Route path='/contact' element={<Contact />} /> 
                <Route path='/partners' element={<Partners />} /> 
                <Route path='/faq' element={<Faq />} /> 
                <Route path='*' element={<NotFound />} />
             </Routes>
           </div>
           <Scroll />
           <CookieBanner />
           <Footer />
         </div>
         </BrowserRouter>
  );
}

export default App;
