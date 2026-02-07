import React, { useState, useEffect, useContext } from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(true);
    const navigate = useNavigate();
    const { isAuthenticated, loading: authLoading } = useContext(AuthContext);

    useEffect(() => {
        fetchJobs();
    }, []);


    const fetchJobs = () => {
        const savedJobs = localStorage.getItem('recruiterai_jobs');
        const jobsList = savedJobs ? JSON.parse(savedJobs) : [];

        setJobs(jobsList);
        setFetchLoading(false);
    };

    const handleDeleteJob = (id) => {
        const updatedJobs = jobs.filter(job => job._id !== id);
        setJobs(updatedJobs);
        localStorage.setItem('recruiterai_jobs', JSON.stringify(updatedJobs));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
                        <p className="text-gray-500">Manage your open roles and candidate pipelines</p>
                    </div>
                    <button
                        onClick={() => navigate('/create-job')}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
                    >
                        <Plus size={20} className="mr-2" />
                        Post New Job
                    </button>
                </div>

                {(authLoading || fetchLoading) ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                ) : jobs.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl border border-gray-200 border-dashed">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No active jobs found</h3>
                        <p className="text-gray-500 mb-6">Get started by posting your first job opening.</p>
                        <button
                            onClick={() => navigate('/create-job')}
                            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium border border-blue-200"
                        >
                            Create Job
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map(job => (
                            <JobCard
                                key={job._id}
                                job={job}
                                isOwner={true}
                                onDelete={handleDeleteJob}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
