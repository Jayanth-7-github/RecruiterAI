import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            RecruiterAI
                        </span>
                        <p className="mt-4 text-gray-400 text-sm">
                            Making hiring 10x faster with the power of artificial intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                            <li><a href="#" className="hover:text-white">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} RecruiterAI. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">

                        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
