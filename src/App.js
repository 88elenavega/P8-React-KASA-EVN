
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home' 
import Header from './components/Header' 
import Navbar from './components/Navbar'
import Footer from './components/Footer' 

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/header' element={<Header />} />
      <Route path='/footer' element={<Footer />} />
    </Routes>
  </Router>
  );
}

export default App;
