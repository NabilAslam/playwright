import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'

// Pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Test from './pages/Test';


function App() {
  return (
    <div>

    <Navbar></Navbar>

     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test" element={<Test />} />
     </Routes>

 
     <Footer></Footer>


    </div>
  )
}
export default App;
