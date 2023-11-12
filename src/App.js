import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'; 
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Ourfood from './components/Ourfood';
import Services from './components/Services';
import CookieBanner from './components/Cookies';
import NotFound from './components/NotFound';
import Scroll from './components/Scroll';
import OurfoodInfo from './components/OurfoodInfo';


function App() {
  return (

         <BrowserRouter>

         <div className='App'>
         <Navbar />
           <div className='content'>
             <Routes>
              <Route path='/' element={<Home />} />
               <Route path='/ourfood' element={<Ourfood />} />
               <Route path='/ourfood/:id' element={<OurfoodInfo />} />
             <Route path='services' element={<Services />} /> 
                <Route path='/contact' element={<Contact />} /> 
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
