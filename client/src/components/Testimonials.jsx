import React from 'react';

const TestimonialCard = ({ quote, name, title, company }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
        <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">"{quote}"</p>
        <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center font-bold text-gray-500 text-xl">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-gray-900">{name}</h4>
                <p className="text-sm text-gray-500">{title}, {company}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">Trusted by Modern Hiring Teams</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup."
                        name="Rahul Mehta"
                        title="Founder"
                        company="TechStart Solutions"
                    />
                    <TestimonialCard
                        quote="The AI matching is incredibly accurate. It surfaced candidates I might have missed manually, and the automated scheduling saved me hours every week."
                        name="Jessica L."
                        title="Head of Talent"
                        company="Creative Hub"
                    />
                    <TestimonialCard
                        quote="Finally, a tool that actually understands context, not just keywords. Our quality of hire has improved significantly since we started using RecruiterAI."
                        name="David Chen"
                        title="VP of Engineering"
                        company="ScaleUp Inc."
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
