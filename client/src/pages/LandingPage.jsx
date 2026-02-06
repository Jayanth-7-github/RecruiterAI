import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Metrics from '../components/Metrics';
import MultiPlatformSync from '../components/MultiPlatformSync';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTAForm from '../components/CTAForm';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <HowItWorks />
                <Metrics />
                <MultiPlatformSync />
                <Testimonials />
                <FAQ />
                <CTAForm />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
