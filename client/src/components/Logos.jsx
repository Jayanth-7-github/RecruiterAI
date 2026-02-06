import React from 'react';

const LOGOS = [
  "LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre",
  "Wellfound", "IIMJobs", "Glassdoor", "Monster India", "Cutshort"
];

const LogoItem = ({ name }) => (
  <div className="mx-8 flex items-center justify-center group cursor-pointer">
    <span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300 whitespace-nowrap filter grayscale group-hover:grayscale-0">
      {name}
    </span>
  </div>
);

const Logos = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="text-center mb-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Post Once, Reach Everywhere</h2>
        <p className="text-gray-600 text-lg">RecruiterAI automatically syncs your job postings across all major platforms</p>
      </div>

      <div className="relative flex overflow-x-hidden w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {LOGOS.map((logo, i) => <LogoItem key={i} name={logo} />)}
          {LOGOS.map((logo, i) => <LogoItem key={`dup-${i}`} name={logo} />)}
          {LOGOS.map((logo, i) => <LogoItem key={`dup2-${i}`} name={logo} />)}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {LOGOS.map((logo, i) => <LogoItem key={`l2-${i}`} name={logo} />)}
          {LOGOS.map((logo, i) => <LogoItem key={`l2-dup-${i}`} name={logo} />)}
          {LOGOS.map((logo, i) => <LogoItem key={`l2-dup2-${i}`} name={logo} />)}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 35s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default Logos;
