import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main/Main';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/home' element={<Home />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
