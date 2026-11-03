import { Link } from 'react-router-dom';
import './style/Navbar.css'; 
import logoImage from '../assets/Master.png'; 
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logoImage} alt='logo' className='nav-logo'/>
                <h1>ALPHA MASTER</h1>
            </div>
            
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/register" className="login-btn">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
