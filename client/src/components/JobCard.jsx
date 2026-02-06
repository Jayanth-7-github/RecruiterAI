import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Calendar, Pencil, Trash2 } from 'lucide-react';

const JobCard = ({ job, isOwner, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.stopPropagation();
        navigate(`/edit-job/${job._id}`);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you want to delete this job and all its candidates?')) {
            onDelete(job._id);
        }
    };

    return (
        <div
            onClick={() => navigate(`/jobs/${job._id}`)}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group relative"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors pr-2">
                        {job.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{job.department}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                        Active
                    </span>
                    {isOwner && (
                        <div className="flex space-x-1">
                            <button
                                onClick={handleEdit}
                                className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
                                title="Edit Job"
                            >
                                <Pencil size={16} />
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
                                title="Delete Job"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <DollarSign size={16} className="mr-2 text-gray-400" />
                    {job.salaryRange}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    Posted {new Date(job.createdAt).toLocaleDateString()}
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {job.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {skill}
                    </span>
                ))}
                {job.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                        +{job.skills.length - 3}
                    </span>
                )}
            </div>
        </div>
    );
};

export default JobCard;
