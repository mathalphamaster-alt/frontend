import { Link } from 'react-router-dom';
import './style/Navbar.css'; 
import logoImage from '../assets/Master.png'; // உங்கள் கோப்பு இருக்கும் இடத்திற்கு ஏற்ப ஃபோல்டர் பாথ்சை சரிபார்த்துக் கொள்ளவும்

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
