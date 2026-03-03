export default function PostJobCTA() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">

                    {/* angled shape */}
                    <div className="hidden lg:block absolute left-0 top-0 h-full w-1/3 bg-indigo-700 clip-path-angle"></div>

                    <div className="grid lg:grid-cols-2 items-center gap-10 p-10 lg:p-16">

                        {/* LEFT CONTENT */}
                        <div className="text-white z-10">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Start posting <br /> jobs today
                            </h2>

                            <p className="mt-6 text-indigo-100">
                                Start posting jobs for only $10.
                            </p>

                            <button className="mt-8 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                                Sign Up For Free
                            </button>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative">
                            <img
                                src="/images/dashboard.png"
                                alt="Dashboard"
                                className="w-full max-w-lg mx-auto lg:ml-auto drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}