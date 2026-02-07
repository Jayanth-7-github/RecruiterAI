import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import { Search } from 'lucide-react';

const MOCK_JOBS = [
    {
        _id: '1',
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        location: 'Remote',
        salary: '$120k - $160k',
        type: 'Full-time',
        skills: ['React', 'TypeScript', 'Tailwind CSS'],
        description: 'We are looking for a Senior Frontend Developer to join our team...'
    },
    {
        _id: '2',
        title: 'Product Designer',
        department: 'Design',
        location: 'San Francisco, CA',
        salary: '$110k - $150k',
        type: 'Full-time',
        skills: ['Figma', 'UI/UX', 'Prototyping'],
        description: 'Join our design team to create beautiful and intuitive user experiences...'
    },
    {
        _id: '3',
        title: 'Backend Engineer',
        department: 'Engineering',
        location: 'Austin, TX',
        salary: '$130k - $170k',
        type: 'Full-time',
        skills: ['Node.js', 'MongoDB', 'AWS'],
        description: 'Help us build robust and scalable backend systems...'
    }
];

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const savedJobs = localStorage.getItem('recruiterai_jobs');
        if (savedJobs) {
            setJobs(JSON.parse(savedJobs));
            setLoading(false);
        } else {

            localStorage.setItem('recruiterai_jobs', JSON.stringify(MOCK_JOBS));
            setJobs(MOCK_JOBS);
            setLoading(false);
        }
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Open Roles</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Find your next career opportunity at top companies using RecruiterAI.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto mb-10 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-lg shadow-sm"
                        placeholder="Search by job title, department, or skill..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                ) : filteredJobs.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
                        <p className="text-gray-500">Try adjusting your search terms.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map(job => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Jobs;
