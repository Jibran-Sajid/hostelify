import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './assets/SharedComponents/Navbar';
import { SlideOver } from './assets/SharedComponents/Navbar';
import Home from './assets/Pages/Home/Home';
import Footer from './assets/SharedComponents/Footer';
import RoomDetails from './assets/Pages/Room/RoomDetails';
import Error from './assets/Pages/Errors/Error';

function App() {

  let [open, setOpen] = useState(false)

  return (
    <>
    <Navbar setOpen={setOpen} isOpen={open}/>
    <SlideOver setOpen={setOpen} isOpen={open}/>
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/room-details" element={<RoomDetails />} />
      <Route exact path="*" element={<Error errorCode={404} message="Opps! Page Not Found" />} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App