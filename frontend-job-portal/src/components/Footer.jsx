import React from "react";
import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left section */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-3">QuickHire</h2>
                    <p className="text-sm leading-relaxed">
                        Great platform for the job seeker that passionate about startups.
                        Find your dream job easier.
                    </p>
                </div>

                {/* Center section */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-white font-semibold mb-3">About</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Companies</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Terms</a></li>
                            <li><a href="#" className="hover:text-white">Advice</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-3">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Help Docs</a></li>
                            <li><a href="#" className="hover:text-white">Guide</a></li>
                            <li><a href="#" className="hover:text-white">Updates</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right section */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Get job notifications</h3>
                    <p className="text-sm mb-4">
                        The latest job news, articles, sent to your inbox weekly.
                    </p>
                    <form className="flex flex-col md:flex-row sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-3 py-2 rounded-md text-gray-900 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">2021 @ QuickHire. All rights reserved.</p>
                <div className="flex gap-4 text-gray-400">
                    <a href="#" className="hover:text-white"><Facebook size={18} /></a>
                    <a href="#" className="hover:text-white"><Instagram size={18} /></a>
                    <a href="#" className="hover:text-white"><Dribbble size={18} /></a>
                    <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
                    <a href="#" className="hover:text-white"><Twitter size={18} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
