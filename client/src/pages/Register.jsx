import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User as UserIcon, CheckCircle, ArrowRight } from 'lucide-react';

const Register = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, isAuthenticated } = context || {};

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/create-job');
        }
    }, [isAuthenticated, navigate]);

    const { name, email, password, confirmPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);
        try {
            await register({ name, email, password });
        } catch (err) {
            setError(err.response?.data?.msg || 'Registration failed');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-50">

            <div className="hidden lg:flex flex-1 relative w-0 bg-blue-700">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-600 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay opacity-50"></div>

                <div className="relative z-10 w-full flex flex-col justify-between p-20 text-white">
                    <div>
                        <span className="text-3xl font-extrabold tracking-tight">RecruiterAI</span>
                    </div>
                    <div>
                        <blockquote className="text-2xl font-medium leading-relaxed mb-8">
                            "This platform completely transformed our hiring process. We reduced our time-to-hire by 40% in just two months."
                        </blockquote>
                        <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-400/30 flex items-center justify-center font-bold">
                                JD
                            </div>
                            <div className="ml-4">
                                <div className="font-bold">Jane Doe</div>
                                <div className="text-blue-200">Head of Talent, TechCorp</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white shadow-xl z-20">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="lg:hidden mb-8 cursor-pointer" onClick={() => navigate('/')}>
                        <span className="text-3xl font-extrabold text-blue-600">RecruiterAI</span>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Get started for free
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">Sign in instead</Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={onSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

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
                                        placeholder="you@company.com"
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
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3"
                                        placeholder="••••••••"
                                        value={confirmPassword}
                                        onChange={onChange}
                                    />
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
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                                >
                                    {isLoading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={18} className="ml-2" />
                                </button>
                            </div>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                By signing up, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
