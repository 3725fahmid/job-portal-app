import React from "react";
import { Search, MapPin } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                            Discover <br />
                            more than{" "}
                            <span className="text-blue-600">5000+ Jobs</span>
                        </h1>

                        {/* Underline decoration */}
                        <div className="w-32 h-2 bg-blue-500 rounded-full mt-4 mb-6"></div>

                        <p className="text-gray-500 text-lg mb-8 max-w-lg">
                            Great platform for the job seeker that searching for new career
                            heights and passionate about startups.
                        </p>

                        {/* SEARCH BOX */}
                        <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center">

                            {/* Job Input */}
                            <div className="flex items-center flex-1 bg-gray-50 rounded-lg px-4 py-3">
                                <Search className="text-gray-400 w-5 h-5 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Job title or keyword"
                                    className="bg-transparent outline-none w-full text-sm"
                                />
                            </div>

                            {/* Location Input */}
                            <div className="flex items-center flex-1 bg-gray-50 rounded-lg px-4 py-3">
                                <MapPin className="text-gray-400 w-5 h-5 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Florence, Italy"
                                    className="bg-transparent outline-none w-full text-sm"
                                />
                            </div>

                            {/* Button */}
                            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300">
                                Search my job
                            </button>
                        </div>

                        <p className="text-sm text-gray-400 mt-4">
                            Popular: UI Designer, UX Researcher, Android, Admin
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                            alt="A kid laughing outdoors"
                            className="w-[80%] md:w-[70%] lg:w-full object-contain"
                        />

                        {/* Decorative shape */}
                        <div className="absolute inset-0 border-4 border-indigo-200 rounded-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;