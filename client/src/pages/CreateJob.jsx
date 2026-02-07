import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { ArrowLeft } from 'lucide-react';

const CreateJob = () => {
    const navigate = useNavigate();
    const { isAuthenticated, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, loading, navigate]);

    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        salaryRange: '',
        description: '',
        skills: ''
    });
    const [submitLoading, setSubmitLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);


        setTimeout(() => {
            setSubmitLoading(false);
            navigate('/dashboard');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back to Dashboard
                </button>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Post a New Job</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                                <input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g. Senior React Developer"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <input
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g. Engineering"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g. Remote / New York"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                                <input
                                    name="salaryRange"
                                    value={formData.salaryRange}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g. $120k - $150k"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills (Comma separated)</label>
                            <input
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g. React, Node.js, TypeScript, MongoDB"
                            />
                            <p className="mt-1 text-xs text-gray-500">These keywords will be used by the AI to score candidates.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Describe the role and responsibilities..."
                            />
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={submitLoading}
                                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70"
                            >
                                {submitLoading ? 'Publishing...' : 'Publish Job'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateJob;
