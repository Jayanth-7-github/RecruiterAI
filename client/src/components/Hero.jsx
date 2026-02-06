import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm animate-fade-in-up">
                    🚀 New: AI-Powered Candidate Ranking
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                    Every Hire, <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        Faster and Better
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
                    Stop losing great candidates to slow, manual hiring processes.
                    Let AI handle the heavy lifting while you focus on building your team.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/register')}
                        className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Start Hiring Smarter
                    </button>
                    <a
                        href="#how-it-works"
                        className="px-8 py-4 bg-white text-gray-700 border border-gray-200 text-lg font-semibold rounded-full hover:bg-gray-50 transition-all hover:-translate-y-1 flex items-center justify-center"
                    >
                        See How It Works
                    </a>
                </div>
            </div>


            {/* Desktop-Only Social Proof Pillars - Grounded Grid Design */}
            <div className="hidden xl:block absolute top-[15%] inset-x-0 bottom-0 pointer-events-none z-0">
                <div className="max-w-7xl mx-auto h-full px-4 relative">

                    {/* Left Pillar - Grounded */}
                    <div className="absolute left-0 top-10 space-y-12">
                        {/* Sarah K */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-[280px] border border-gray-100 transform -rotate-1 translate-x-4 animate-float">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs ring-4 ring-amber-50">SK</div>
                                <div>
                                    <p className="text-[13px] leading-relaxed text-gray-700 font-medium italic">"Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."</p>
                                    <div className="mt-3 flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">— Sarah K., Founder</div>
                                </div>
                            </div>
                        </div>

                        {/* Rahul M */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-[280px] border border-gray-100 transform rotate-1 animate-float" style={{ animationDelay: '1.5s' }}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs ring-4 ring-emerald-50">RM</div>
                                <div>
                                    <p className="text-[13px] leading-relaxed text-gray-700 font-medium italic">"Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months."</p>
                                    <div className="mt-3 flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">— Rahul M., Hiring Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Pillar - Grounded */}
                    <div className="absolute right-0 top-16 space-y-12">
                        {/* Priya S */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-[280px] border border-gray-100 transform rotate-1 -translate-x-4 animate-float" style={{ animationDelay: '2.5s' }}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-xs ring-4 ring-violet-50">PS</div>
                                <div>
                                    <p className="text-[13px] leading-relaxed text-gray-700 font-medium italic">"I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."</p>
                                    <div className="mt-3 flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">— Priya S., CEO</div>
                                </div>
                            </div>
                        </div>

                        {/* Amit T */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-[280px] border border-gray-100 transform -rotate-1 animate-float" style={{ animationDelay: '4s' }}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-xs ring-4 ring-rose-50">AT</div>
                                <div>
                                    <p className="text-[13px] leading-relaxed text-gray-700 font-medium italic">"Our best candidate accepted another offer while we were scheduling."</p>
                                    <div className="mt-3 flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">— Amit T., Head of HR</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
