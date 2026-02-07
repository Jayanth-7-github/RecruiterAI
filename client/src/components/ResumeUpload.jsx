import React, { useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Loader, X } from 'lucide-react';

const ResumeUpload = ({ jobId, onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setStatus(null);
        setResult(null);
    };

    const handleUpload = () => {
        if (!file) return;

        setUploading(true);


        setTimeout(() => {
            const mockResult = {
                score: 85 + Math.floor(Math.random() * 10),
                skills: ['React', 'JavaScript', 'Tailwind', 'Node.js']
            };
            setResult(mockResult);
            setStatus('success');
            setFile(null);
            setUploading(false);
            if (onUploadSuccess) onUploadSuccess();
        }, 2000);
    };

    if (result) {
        return (
            <div className="bg-white border rounded-xl p-6 shadow-sm animate-fade-in-up">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center text-green-600 font-bold mb-2">
                        <CheckCircle size={20} className="mr-2" />
                        Application Submitted
                    </div>
                    <button onClick={() => { setResult(null); setStatus(null); }} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">AI Match Score</div>
                    <div className={`text-5xl font-extrabold ${result.score >= 70 ? 'text-green-600' : result.score >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                        {result.score}%
                    </div>
                </div>

                <div className="space-y-3">
                    <div>
                        <p className="text-sm font-bold text-gray-700 mb-2">Skills Identified:</p>
                        <div className="flex flex-wrap gap-2">
                            {result.skills && result.skills.length > 0 ? (
                                result.skills.map((skill, i) => (
                                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-100">
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <span className="text-sm text-gray-500 italic">No specific skills extracted.</span>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => { setResult(null); setStatus(null); }}
                    className="mt-6 w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-semibold"
                >
                    Upload Another
                </button>
            </div>
        );
    }

    return (
        <div className="bg-blue-50 border border-dashed border-blue-200 rounded-xl p-8 text-center transition-colors hover:bg-blue-100/50">
            <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <FileText size={24} />
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Candidate Resume</h3>
            <p className="text-sm text-gray-500 mb-6">PDF files only. AI will extract skills automatically.</p>

            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
            />

            {!file ? (
                <label
                    htmlFor="resume-upload"
                    className="inline-block px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                    Select PDF
                </label>
            ) : (
                <div className="flex flex-col items-center">
                    <p className="text-sm font-medium text-gray-900 mb-4">{file.name}</p>
                    <button
                        onClick={handleUpload}
                        disabled={uploading}
                        className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-70"
                    >
                        {uploading ? <Loader className="animate-spin mr-2" size={16} /> : null}
                        {uploading ? 'Analyzing...' : 'Process Resume'}
                    </button>
                </div>
            )}

            {status === 'error' && (
                <div className="mt-4 flex items-center justify-center text-red-600 text-sm font-medium">
                    <AlertCircle size={16} className="mr-1" /> Upload Failed
                </div>
            )}
        </div>
    );
};

export default ResumeUpload;
