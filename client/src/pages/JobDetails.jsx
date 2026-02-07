import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ResumeUpload from '../components/ResumeUpload';
import CandidateTable from '../components/CandidateTable';
import { AuthContext } from '../context/AuthContext';
import { ArrowLeft, Users, Briefcase } from 'lucide-react';



const MOCK_CANDIDATES = [
    {
        _id: 'c1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        score: 92,
        status: 'pending',
        summary: 'Expert in React and modern CSS features. 5 years of experience.'
    },
    {
        _id: 'c2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        score: 85,
        status: 'shortlisted',
        summary: 'Strong backend skills with Node.js. Good understanding of frontend basics.'
    }
];

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);

    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        const savedJobs = localStorage.getItem('recruiterai_jobs');
        if (savedJobs) {
            const jobsList = JSON.parse(savedJobs);
            const foundJob = jobsList.find(j => j._id === id);
            if (foundJob) {
                setJob(foundJob);
            }
        }

        if (isAuthenticated) {
            setCandidates(MOCK_CANDIDATES);
        }
        setLoading(false);
    }, [id, isAuthenticated]);

    const handleStatusUpdate = (candidateId, newStatus) => {
        setCandidates(candidates.map(c =>
            c._id === candidateId ? { ...c, status: newStatus } : c
        ));
    };

    if (loading) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
    );

    if (!job) return <div>Job not found</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                <button
                    onClick={() => navigate(isAuthenticated ? '/dashboard' : '/jobs')}
                    className="flex items-center text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back to {isAuthenticated ? 'Dashboard' : 'Jobs'}
                </button>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                            <div className="flex items-center text-gray-500 space-x-4 mb-4">
                                <span className="flex items-center"><Briefcase size={16} className="mr-1" /> {job.department}</span>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs px-2 font-bold">Active</span>
                            </div>
                        </div>
                        {isAuthenticated && (
                            <div className="text-right">
                                <div className="text-3xl font-bold text-blue-600">{candidates.length}</div>
                                <div className="text-sm text-gray-500">Candidates</div>
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="prose max-w-none text-gray-600">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Description</h3>
                        <p className="whitespace-pre-line">{job.description}</p>
                    </div>
                </div>

                {isAuthenticated ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                    <h3 className="font-bold text-gray-900 flex items-center">
                                        <Users size={18} className="mr-2 text-gray-500" /> Candidate Pipeline
                                    </h3>
                                </div>
                                <CandidateTable candidates={candidates} onStatusUpdate={handleStatusUpdate} />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-4">Add Candidate</h3>
                                <ResumeUpload jobId={job._id} onUploadSuccess={() => { }} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for this Position</h2>
                            <ResumeUpload jobId={job._id} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobDetails;
