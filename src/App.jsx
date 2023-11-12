import React from 'react';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from "./store"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Portfolio from './components/Portfolio';
import SingelServices from "./components/SingelServices"

function App() {


  return (
    <>

      <Provider store={store}>
      <Router>
      <Header />
        <Routes>
          
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/Services/:id' element={<SingelServices/>}/>
          <Route path='/services' element={<Services />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
      





      </Provider>






    </>
  )
}

export default App
