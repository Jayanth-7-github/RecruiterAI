import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const CTAForm = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="pricing" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-300 blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to Hire Better, Faster?</h2>
                <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Join 500+ companies hiring smarter with AI.</p>


                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="px-8 py-4 bg-white text-blue-700 text-lg font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Go to Dashboard
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all hover:-translate-y-1">
                        Schedule Demo
                    </button>
                </div>


                <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto shadow-2xl text-left">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-600">We'll be in touch shortly.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-blue-600 font-medium hover:text-blue-700"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Or Get In Touch Directly</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 bg-white"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 bg-white"
                                        placeholder="Acme Inc."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Contact Sales'}
                                </button>

                                {status === 'error' && (
                                    <div className="text-red-500 text-sm text-center mt-2">
                                        Something went wrong. Please try again.
                                    </div>
                                )}
                            </form>
                        </>
                    )}
                </div>

                <p className="mt-8 text-blue-200 text-sm font-medium">
                    No credit card required. 14-day free trial included.
                </p>
            </div>
        </section>
    );
};

export default CTAForm;
