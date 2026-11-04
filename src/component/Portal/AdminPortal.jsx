import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPortal.css';
import logo from '../../assets/logo.jpeg'; 

export default function AdminPortal() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');

    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    useEffect(() => {
        if (isAuthenticated) {
            fetchRegistrations();
        }
    }, [isAuthenticated]);

    const fetchRegistrations = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://backend-stnm.onrender.com/api/admin/registrations");
            setRegistrations(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data", error);
            setLoading(false);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.username === 'admin' && credentials.password === 'AlPhA123') {
            setIsAuthenticated(true);
            setLoginError('');
        } else {
            setLoginError('Invalid UserID or Password');
        }
    };

    const handleCredentialChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setCredentials({ username: '', password: '' });
    };

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = registrations.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(registrations.length / recordsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleView = (reg) => {
        alert(`Viewing Details:\nName: ${reg.name}\nEmail: ${reg.email}\nPhone: ${reg.phone}\nState: ${reg.state}\nCity: ${reg.city}`);
    };

    const handleEdit = (id) => {
        alert(`Edit functionality for ID: ${id} Connect this to your edit form or modal.`);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this registration?")) {
            try {
                // 👇 டேட்டாபேஸிலிருந்து ரெக்கார்டை நீக்க லைவ் API கால் சேர்க்கப்பட்டுள்ளது
                await axios.delete(`https://backend-stnm.onrender.com/api/admin/registrations/${id}`);
                
                setRegistrations(registrations.filter(reg => reg._id !== id));
                alert("Deleted Successfully!");
            } catch (error) {
                console.error("Error deleting record", error);
                alert("Failed to delete registration");
            }
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="admin-login-box">
                    <img src={logo} alt="AlphaMaster Logo" className="admin-logo" />
                    <h2>Admin Login</h2>
                    {loginError && <p className="error-text">{loginError}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label>User ID</label>
                            <input 
                                type="text" 
                                name="username" 
                                value={credentials.username} 
                                onChange={handleCredentialChange} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                value={credentials.password} 
                                onChange={handleCredentialChange} 
                                required 
                            />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <div className="admin-header">
                <div className="admin-header-title">
                    <img src={logo} alt="AlphaMaster Logo" className="admin-dashboard-logo" />
                    <h1>AlphaMaster - Admin Portal</h1>
                </div>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
            
            <p>Total Registrations: <strong>{registrations.length}</strong></p>

            {loading ? (
                <p>Loading registrations...</p>
            ) : (
                <>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>S.No</th> 
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords.length > 0 ? (
                                    currentRecords.map((reg, index) => (
                                        <tr key={reg._id}>
                                            <td><strong>{registrations.length - (indexOfFirstRecord + index)}</strong></td>
                                            <td>{reg.name}</td>
                                            <td>{reg.email}</td>
                                            <td>{reg.phone}</td>
                                            <td>{reg.state}</td>
                                            <td>{reg.city}</td>
                                            <td>{new Date(reg.createdAt).toLocaleDateString()}</td>
                                            <td className="action-btns">
                                                <button className="btn-view" onClick={() => handleView(reg)}>View</button>
                                                <button className="btn-edit" onClick={() => handleEdit(reg._id)}>Edit</button>
                                                <button className="btn-delete" onClick={() => handleDelete(reg._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="no-data">No registrations found.</td> 
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button 
                                onClick={() => paginate(currentPage - 1)} 
                                disabled={currentPage === 1}
                                className="page-nav-btn"
                            >
                                Prev
                            </button>
                            
                            {[...Array(totalPages)].map((_, index) => (
                                <button 
                                    key={index + 1} 
                                    onClick={() => paginate(index + 1)}
                                    className={`page-num-btn ${currentPage === index + 1 ? 'active' : ''}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button 
                                onClick={() => paginate(currentPage + 1)} 
                                disabled={currentPage === totalPages}
                                className="page-nav-btn"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
