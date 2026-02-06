import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { User, LogOut } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, loading, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const authLinks = (
        <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Jobs</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Dashboard</Link>
            <Link
                to="/create-job"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                Post Job
            </Link>
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 text-gray-700 font-medium">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <User size={14} className="text-blue-600" />
                </div>
                <span className="text-sm">{user && user.name}</span>
            </div>
            <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                title="Logout"
            >
                <LogOut size={20} />
            </button>

        </div>
    );

    const guestLinks = (
        <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Jobs</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sign In</Link>
            <Link
                to="/create-job"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                Post Job
            </Link>
        </div>
    );

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            RecruiterAI
                        </span>
                    </div>

                    {!loading && (
                        <>
                            {isAuthenticated ? authLinks : guestLinks}
                        </>
                    )}

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
                        <Link to="/jobs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Jobs</Link>
                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Dashboard</Link>
                                <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Sign In</Link>
                                <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Sign Up</Link>
                            </>
                        )}
                        <Link
                            to="/create-job"
                            className="w-full text-left block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50"
                        >
                            Post Job
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
