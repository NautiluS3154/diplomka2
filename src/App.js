import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main/Main';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { AboutUs } from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/news' element={<News />}/>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
