import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed pr-8">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="py-24 bg-secondary">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-2">
                    <FAQItem
                        question="How does AI screening work?"
                        answer="Our AI analyzes resumes against your job descriptions, looking for relevant skills, experience, and context. Unlike simple keyword matching, it understands semantics and career progression to rank candidates effectively."
                    />
                    <FAQItem
                        question="Does RecruiterAI integrate with our existing ATS?"
                        answer="Yes, RecruiterAI integrates seamlessly with major ATS platforms like Greenhouse, Lever, Workday, and more, ensuring your workflow remains uninterrupted."
                    />
                    <FAQItem
                        question="What's the pricing structure?"
                        answer="We offer flexible pricing tiers based on your hiring volume and team size. Start with a free trial to see the value, then choose a plan that fits your growth."
                    />
                    <FAQItem
                        question="How long does setup take?"
                        answer="Most teams are up and running in less than 15 minutes. Our onboarding is automated, and we provide templates to get you started immediately."
                    />
                    <FAQItem
                        question="Is candidate data secure?"
                        answer="Absolutely. We use enterprise-grade encryption (AES-256) and are fully GDPR and SOC2 compliant to ensure your data and your candidates' privacy are protected."
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
