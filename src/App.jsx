import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Results from './pages/Results';
import GlobalStyles from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      {/* Global styles */}
      <GlobalStyles />
      
      {/* Main layout */}
      <div className="app">
        <Header />
        {/* Page content */}
        <main>
          <Menu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
