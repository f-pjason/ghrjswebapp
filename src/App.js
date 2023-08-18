import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Education from './pages/Education'
import Works from './pages/Works'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/education" element={<Education />} /> 
          <Route path="/works" element={<Works />} /> 
        </Routes>
        <Footer />
      </Router>
       </div>
  );
}

export default App;
