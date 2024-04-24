import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './assets/SharedComponents/Navbar';
import { SlideOver } from './assets/SharedComponents/Navbar';
import Home from './assets/Pages/Home/Home';
import Footer from './assets/SharedComponents/Footer';
import ProductDetails from './assets/Pages/ProductDetails/ProductDetails';
import Error from './assets/Pages/Errors/Error';

function App() {

  let [open, setOpen] = useState(false)

  return (
    <>
    <Navbar setOpen={setOpen} isOpen={open}/>
    <SlideOver setOpen={setOpen} isOpen={open}/>
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/details/" element={<ProductDetails />} />
      <Route exact path="*" element={<Error errorCode={404} message="Opps! Page Not Found" />} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App