import React from 'react';
import { Search, Video, Database, Sparkles } from 'lucide-react';


const Node = ({ text, type = 'process', label }) => {
    const bgColors = {
        process: 'bg-white border-gray-100 text-gray-800 shadow-sm',
        ai: 'bg-[#3B82F6] border-[#3B82F6] text-white shadow-lg shadow-blue-100',
        success: 'bg-[#EFF6FF] border-[#A5D8FF] text-[#3B82F6]',
        rejection: 'bg-gray-50 border-gray-100 text-gray-500',
        wait: 'bg-white border-gray-200 text-orange-400'
    };

    return (
        <div className="relative group w-full max-w-[260px] mx-auto">
            {label && (
                <div className="absolute -top-2.5 left-4 z-20 bg-gray-900 text-white text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest shadow-sm">
                    {label}
                </div>
            )}
            <div className={`p-4 rounded-xl border transition-all text-center ${bgColors[type]}`}>
                <span className="text-[11px] font-bold leading-snug tracking-tight">{text}</span>
            </div>
        </div>
    );
};

const DecisionNode = ({ text }) => (
    <div className="relative py-8 flex flex-col items-center">
        <div className="w-14 h-14 bg-white border-2 border-[#A5D8FF] rotate-45 flex items-center justify-center shadow-lg shadow-blue-50/50 z-10">
            <div className="-rotate-45 text-[9px] text-[#3B82F6] font-black text-center px-1 leading-tight uppercase">
                {text}
            </div>
        </div>


        <div className="absolute top-1/2 -translate-y-1/2 w-[120%] flex justify-between px-2">
            <span className="text-[9px] font-black text-[#3B82F6] bg-white px-1">YES</span>
            <span className="text-[9px] font-black text-gray-400 bg-white px-1">NO</span>
        </div>
    </div>
);

const Connector = () => (
    <div className="flex justify-center h-6">
        <div className="w-0.5 h-full bg-[#EFF6FF] relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b-2 border-r-2 border-[#A5D8FF] rotate-45"></div>
        </div>
    </div>
);

const FlowchartCard = ({ title, icon: Icon, children, benefit }) => (
    <div className="flex flex-col bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden h-full">
        <div className="p-8 pb-4">
            <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-2xl bg-[#EFF6FF] text-[#3B82F6]">
                    <Icon size={20} />
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">{title}</h3>
            </div>
        </div>

        <div className="flex-1 px-8 py-10 relative bg-[#fcfdfe] border-y border-gray-50 flex items-center justify-center">
            <div className="flex flex-col items-center w-full">
                {children}
            </div>
        </div>

        <div className="p-8 pt-6">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#EFF6FF] border border-[#A5D8FF]/30">
                <Sparkles size={16} className="text-[#3B82F6]" />
                <p className="text-[#3B82F6] font-bold text-[10px] uppercase tracking-wider">{benefit}</p>
            </div>
        </div>
    </div>
);

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                        AI Recruiting Software That Works <br className="hidden md:block" />
                        Like Your Own <span className="text-[#3B82F6]">HR Team</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium">
                        Build custom hiring workflows in minutes. No coding required.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <FlowchartCard title="Automated Screening" icon={Search} benefit="Screen 250+ applications in minutes">
                        <Node text="New Application Submitted" label="START" />
                        <Connector />
                        <Node text="AI Resume Screening" type="ai" />
                        <Connector />
                        <Node text="Auto-send Screening Questions" />
                        <DecisionNode text="SCORE > 75%?" />
                        <div className="w-full flex gap-3">
                            <Node text="Auto-Schedule Interview" type="success" />
                            <Node text="Send Thank You Email" type="rejection" />
                        </div>
                        <Connector />
                        <Node text="Send Reminder (24h Before)" />
                    </FlowchartCard>

                    <FlowchartCard title="Interview Process" icon={Video} benefit="Reduce hire time by 70%">
                        <Node text="Candidate Accepts Invite" label="ROUND 1" />
                        <Connector />
                        <Node text="Round 1: AI Video Screening" type="ai" />
                        <Connector />
                        <Node text="AI Scores Responses" type="ai" />
                        <DecisionNode text="SCORE > 80%?" />
                        <div className="w-full flex gap-3">
                            <Node text="Schedule Round 2" type="success" />
                            <Node text="Auto-Rejection Email" type="rejection" />
                        </div>
                        <Connector />
                        <Node text="Send Offer Letter" type="success" />
                    </FlowchartCard>

                    <FlowchartCard title="Talent Pipeline" icon={Database} benefit="Never start hiring from zero">
                        <Node text="Candidate Rejected" label="POOL" />
                        <Connector />
                        <Node text="Add to 'Future Talent' Pool" />
                        <Connector />
                        <Node text="Wait 3 Months (Patience)" type="wait" />
                        <DecisionNode text="NEW ROLE OPEN?" />
                        <div className="w-full flex gap-3">
                            <Node text="AI Re-engagement Email" type="success" />
                            <Node text="Check Next Quarter" type="wait" />
                        </div>
                        <Connector />
                        <Node text="Fast-track to Interview" type="success" />
                    </FlowchartCard>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
