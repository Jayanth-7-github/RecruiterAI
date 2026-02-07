import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { ArrowLeft, Loader } from 'lucide-react';

const MOCK_JOBS = [
    {
        _id: '1',
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        location: 'Remote',
        salaryRange: '$120k - $160k',
        type: 'Full-time',
        skills: ['React', 'TypeScript', 'Tailwind CSS'],
        description: 'We are looking for a Senior Frontend Developer to join our team...'
    }
];

const EditJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated, loading: authLoading } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        salaryRange: '',
        description: '',
        skills: ''
    });
    const [pageLoading, setPageLoading] = useState(true);
    const [submitLoading, setSubmitLoading] = useState(false);

    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, authLoading, navigate]);

    useEffect(() => {

        setTimeout(() => {
            const job = MOCK_JOBS.find(j => j._id === id) || MOCK_JOBS[0];
            setFormData({
                title: job.title || '',
                department: job.department || '',
                location: job.location || '',
                salaryRange: job.salaryRange || '',
                description: job.description || '',
                skills: job.skills ? job.skills.join(', ') : ''
            });
            setPageLoading(false);
        }, 500);
    }, [id]);

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

    if (pageLoading || authLoading) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Loader className="animate-spin text-blue-600" size={32} />
        </div>
    );

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
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Job Posting</h1>

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
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <input
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                                <input
                                    name="salaryRange"
                                    value={formData.salaryRange}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            />
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
                            />
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={submitLoading}
                                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70"
                            >
                                {submitLoading ? 'Saving Changes...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditJob;
