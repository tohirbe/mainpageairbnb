import React, { useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import Page from './pages/Productdetelet';
import Footer from './component/Footer';
import Navbar from './component/Navbar'
import Login from './pages/Login';
import { Contexts } from './context/Context';
import Filtermodal from './pages/Filtermodal';
import Modalcalendar from './pages/Modalcalendar';
import Showmap from './pages/Showmap';
export default function App() {
  const [islogin, setislogin] = useState(false)
  const [filter, setfilter] = useState(false)
  const [modalcalendar, setmodalcalendar] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [product, setproduct] = useState([])
  const [catagoryid, setcatagoryid] = useState(1)

  return (
    <div className=''>
      <Contexts.Provider value={{ islogin, setislogin, filter, setfilter, modalcalendar, setmodalcalendar, scrolled, setScrolled, product, setproduct, catagoryid, setcatagoryid }}>
        <Navbar />
        {islogin && <Login />}
        {filter && <Filtermodal />}
        {modalcalendar && <Modalcalendar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page' element={<Page />} />
          <Route path='/showmap' element={<Showmap />} />


        </Routes>
      </Contexts.Provider>
      {/* <Footer /> */}
    </div>
  )
}
