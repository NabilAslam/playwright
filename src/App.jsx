import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Test from './pages/Test';


function App() {
  return (
    <div>

    <Layout></Layout>
     
     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/test" element={<Test />} />
     </Routes>

    </div>
  )
}
export default App;
