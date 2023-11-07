import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'; 
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (

         <BrowserRouter>

         <div className='App'>
         <Navbar />
           <div className='content'>
             <Routes>
              <Route path='/' element={<Home />} />
               {/*  <Route path='/about' element={<About />} />*/}
             {/*   <Route path='*' element={<NotFound />} />  */}
                <Route path='/contact' element={<Contact />} /> 
             </Routes>
           </div>
           <Footer />
         </div>
         </BrowserRouter>
  );
}

export default App;
