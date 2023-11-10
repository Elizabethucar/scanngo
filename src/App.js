import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'; 
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Ourfood from './components/Ourfood';
import Services from './components/Services';
import CookieBanner from './components/Cookies';

function App() {
  return (

         <BrowserRouter>

         <div className='App'>
         <Navbar />
           <div className='content'>
             <Routes>
              <Route path='/' element={<Home />} />
               <Route path='/ourfood' element={<Ourfood />} />
             <Route path='services' element={<Services />} /> 
                <Route path='/contact' element={<Contact />} /> 
             </Routes>
           </div>
           <CookieBanner />
           <Footer />
         </div>
         </BrowserRouter>
  );
}

export default App;
