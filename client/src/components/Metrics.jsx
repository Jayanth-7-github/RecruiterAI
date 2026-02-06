import React from 'react';

const MetricCard = ({ value, label, description, highlight = false }) => (
    <div className={`p-8 rounded-2xl border ${highlight ? 'bg-primary text-white border-primary' : 'bg-white text-gray-900 border-gray-100'} shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all h-full`}>
        <div className={`text-5xl font-extrabold mb-3 ${!highlight && 'text-blue-600'}`}>
            {value}
        </div>
        <div className={`text-xl font-bold mb-3 ${highlight ? 'text-white' : 'text-gray-900'}`}>
            {label}
        </div>
        <p className={`text-sm leading-relaxed ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>
            {description}
        </p>
    </div>
);

const Metrics = () => {
    return (
        <section className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">The RecruiterAI Advantage</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how RecruiterAI transforms your hiring process with data-backed results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <MetricCard
                        value="10×"
                        label="Faster Screening"
                        description="AI parses and ranks 250+ applications per day vs 25 manually."
                    />
                    <MetricCard
                        value="70%"
                        label="Faster Time-to-Hire"
                        description="Average hiring timeline drops from 42 days to just 12 days."
                        highlight={true}
                    />
                    <MetricCard
                        value="25×"
                        label="More Interview Capacity"
                        description="AI conducts 200+ automated screening interviews daily vs 8 manual calls."
                    />
                    <MetricCard
                        value="95%"
                        label="Application Completion"
                        description="Smart application forms reduce candidate drop-off dramatically."
                    />
                    <MetricCard
                        value="89%"
                        label="More Qualified Apps"
                        description="AI job description optimizer attracts higher-quality candidate pipelines."
                    />
                    <MetricCard
                        value="80%"
                        label="Lower Costs"
                        description="Vs traditional recruiting agencies and multiple software subscriptions."
                    />
                    <MetricCard
                        value="50%"
                        label="Reduction in Bad Hires"
                        description="AI skills assessment and matching improves hiring accuracy dramatically."
                    />


                    <div className="p-8 rounded-2xl border bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                        <span className="text-6xl mb-4">🚀</span>
                        <span className="font-bold text-2xl">ROI in <br />30 Days</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;
