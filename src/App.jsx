import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { Download } from './component/Download'; 
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Register from './component/Register'; 
import AdminPortal from './component/Portal/AdminPortal';
import './App.css';
import ScrollToTop from './component/ScrollToTop';
import Terms from './component/Terms';
import Privacy from './component/Privacy';
import Disclaimer from './component/Disclaimer';
import Refund from './component/Refund';


function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/portal';

  return (
    <div className="app-container">
      <ScrollToTop/>
      {/* Admin route allengil mathram Navbar kanikkum */}
      {!isAdminRoute && <Navbar />}
      
      <Routes>
        <Route path="/refund" element={<Refund />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        {/* Admin Portal */}
        <Route path="/portal" element={<AdminPortal />} />
      </Routes>
      
   
      {!isAdminRoute && <Download />}
      {!isAdminRoute && <Footer />}
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;