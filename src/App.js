import React from 'react'
// import './App.css';
import Header from './components/header/header.js';
import HomePage from './pages/homepage/homepage.js';
import AboutUs from './pages/aboutus/aboutus.js';
import Services from './pages/services/services.js';
import ProductGallery from './pages/productgallery/productgallery.js';
import ContactUs from './pages/contactus/contactus.js';
import PrivacyPolicy from './pages/privacypolicy/privacypolicy.js';
import TermsConditions from './pages/termsconditions/termsconditions.js';
import Footer from './components/footer/footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop/scrolltotop.js';

export default function App(){
  return(
    <div>
    <BrowserRouter>
    <ScrollToTop>
      
    <Header />
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
      <Route path='/productgallery' element={<ProductGallery />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/termsconditions' element={<TermsConditions />} />
    </Routes>
    <Footer />
    </ScrollToTop>
    </BrowserRouter>
    </div>
    )
  }


