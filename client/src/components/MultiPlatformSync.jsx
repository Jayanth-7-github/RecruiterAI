import React from 'react';

const platforms = [
    'LinkedIn', 'Naukri.com', 'Indeed', 'AngelList', 'Instahyre',
    'Wellfound', 'IIMJobs', 'Glassdoor', 'Monster India', 'Cutshort'
];

const MultiPlatformSync = () => {
    // Large spacing and clean tracks
    const displayPlatforms = [...platforms, ...platforms];

    return (
        <section className="py-24 bg-white border-b border-t border-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Post Once, Reach Everywhere</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        RecruiterAI automatically syncs your job postings across all major platforms
                    </p>
                </div>
            </div>

            <div className="relative flex whitespace-nowrap overflow-hidden">
                <div className="flex animate-marquee_infinite py-8">
                    {displayPlatforms.map((platform, index) => (
                        <div key={`p1-${index}`} className="px-16">
                            <span className="text-4xl font-black text-gray-200 hover:text-blue-600 transition-colors duration-300">
                                {platform}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex animate-marquee_infinite py-8">
                    {displayPlatforms.map((platform, index) => (
                        <div key={`p2-${index}`} className="px-16">
                            <span className="text-4xl font-black text-gray-200 hover:text-blue-600 transition-colors duration-300">
                                {platform}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee_infinite {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .animate-marquee_infinite {
                    animation: marquee_infinite 40s linear infinite;
                }
            `}} />
        </section>
    );
};

export default MultiPlatformSync;
