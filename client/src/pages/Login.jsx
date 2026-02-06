import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const Login = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();


    const { login, isAuthenticated } = context || {};

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await login({ email, password });
        } catch (err) {
            setError(err.message || 'Invalid credentials');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-50">

            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white shadow-xl z-10 relative">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="cursor-pointer mb-10" onClick={() => navigate('/')}>
                        <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            RecruiterAI
                        </span>
                    </div>

                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Or <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">create a new account</Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            {error && (
                                <div className="rounded-md bg-red-50 p-4 animate-fade-in-up">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800">
                                                {error}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : 'Sign in'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="hidden lg:block relative flex-1 w-0">
                <div className="absolute inset-0 h-full w-full bg-slate-900">

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 z-0"></div>
                    <svg className="absolute inset-0 h-full w-full opacity-10" width="100%" height="100%">
                        <defs>
                            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-20 z-10 text-white">
                    <div className="max-w-md">
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
                            <div className="h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                <CheckCircle className="text-white" size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Smart Hiring Platform</h3>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Join thousands of recruiters using AI to identify top talent 10x faster.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Instant Resume Parsing",
                                    "AI Candidate Scoring",
                                    "Smart Pipeline Management"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-blue-50">
                                        <div className="mr-3 h-5 w-5 rounded-full bg-blue-500/30 flex items-center justify-center">
                                            <CheckCircle size={12} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
