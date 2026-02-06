import React from 'react';
import { MoreHorizontal, ExternalLink, FileText } from 'lucide-react';

const CandidateTable = ({ candidates, onStatusUpdate }) => {
    const getScoreColor = (score) => {
        if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
        if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        return 'text-red-600 bg-red-50 border-red-200';
    };

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Rejected': return 'bg-red-100 text-red-800';
            case 'Offer': return 'bg-green-100 text-green-800';
            case 'Interview': return 'bg-purple-100 text-purple-800';
            default: return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI Score</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills Matched</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {candidates.map((candidate) => (
                        <tr key={candidate._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                        {candidate.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                                        <div className="text-sm text-gray-500">{candidate.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border ${getScoreColor(candidate.score)}`}>
                                    {candidate.score}%
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex flex-wrap gap-1 max-w-xs">
                                    {candidate.skills.slice(0, 4).map((skill, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                                            {skill}
                                        </span>
                                    ))}
                                    {candidate.skills.length > 4 && <span className="text-xs text-gray-400">+{candidate.skills.length - 4}</span>}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyles(candidate.status)}`}>
                                    {candidate.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {candidate.resumeUrl ? (
                                    <a
                                        href={candidate.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                                    >
                                        <FileText size={16} className="mr-1" />
                                        View Resume
                                        <ExternalLink size={14} className="ml-1" />
                                    </a>
                                ) : (
                                    <span className="text-gray-400 text-sm italic">No Resume</span>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex items-center justify-end space-x-2">
                                    <button
                                        onClick={() => onStatusUpdate(candidate._id, 'Interview')}
                                        disabled={candidate.status === 'Interview' || candidate.status === 'Rejected'}
                                        className="text-indigo-600 hover:text-indigo-900 disabled:opacity-30 transition-colors"
                                        title="Invite to Interview"
                                    >
                                        Hire
                                    </button>
                                    <button
                                        onClick={() => onStatusUpdate(candidate._id, 'Rejected')}
                                        disabled={candidate.status === 'Rejected'}
                                        className="text-red-600 hover:text-red-900 disabled:opacity-30 transition-colors bg-red-50 px-2 py-1 rounded text-xs font-bold"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {candidates.length === 0 && (
                        <tr>
                            <td colSpan="5" className="px-6 py-10 text-center text-sm text-gray-500">
                                No candidates yet. Upload a resume to get started.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CandidateTable;
