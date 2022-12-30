import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar'
import Home from './Pages/Home/Home';
import ComingSoon from './Pages/ComingSoon/ComingSoon';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/coming-soon' element={<ComingSoon/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
