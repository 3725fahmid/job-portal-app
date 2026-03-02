import React from "react";

const Navbar = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-600">
                    QuickHire
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
                    <a href="#" className="hover:text-indigo-600 transition">Find Jobs</a>
                    <a href="#" className="hover:text-indigo-600 transition">Browse Companies</a>
                </nav>

                {/* Auth Buttons */}
                <div className="flex gap-4">
                    <button className="text-indigo-600 font-medium hover:underline">
                        Login
                    </button>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                        Sign Up
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;