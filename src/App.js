
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home' 
import { Header } from './components/Header' 
import { Navbar } from './components/Navbar'


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='navbar' element={<Navbar />} />
      <Route path='header' element={<Header />} />
    </Routes>
  </Router>
  );
}

export default App;
