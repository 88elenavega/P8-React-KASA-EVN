
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Header from './components/Header' 
import Footer from './components/Footer' 

import Home from './components/pages/Home' 
import About from './components/pages/About'



function App() {
  return (   
    <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        <Footer />
    </Router>
  );
}

export default App;
