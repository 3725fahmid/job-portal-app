import {
    Pencil,
    BarChart3,
    Megaphone,
    Wallet,
    Monitor,
    Code2,
    Briefcase,
    Users,
} from "lucide-react";

const categories = [
    { name: "Design", jobs: 235, icon: Pencil },
    { name: "Sales", jobs: 756, icon: BarChart3 },
    { name: "Marketing", jobs: 140, icon: Megaphone, active: true },
    { name: "Finance", jobs: 325, icon: Wallet },
    { name: "Technology", jobs: 436, icon: Monitor },
    { name: "Engineering", jobs: 542, icon: Code2 },
    { name: "Business", jobs: 211, icon: Briefcase },
    { name: "Human Resource", jobs: 346, icon: Users },
];

export default function ExploreCategory() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Company Logos */}
                <div className="border border-green-500 p-8 mb-14">
                    <p className="text-gray-500 text-sm mb-6">
                        Companies we helped grow
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
                        <img src="/logos/vodafone.png" className="h-6" />
                        <img src="/logos/intel.png" className="h-6" />
                        <img src="/logos/tesla.png" className="h-6" />
                        <img src="/logos/amd.png" className="h-6" />
                        <img src="/logos/talkit.png" className="h-6" />
                    </div>
                </div>

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Explore by{" "}
                        <span className="text-blue-500">category</span>
                    </h2>

                    <button className="text-blue-600 font-medium hover:underline">
                        Show all jobs →
                    </button>
                </div>

                {/* Category Grid */}
                <div className="grid gap-6 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4">

                    {categories.map((cat, index) => {
                        const Icon = cat.icon;

                        return (
                            <div
                                key={index}
                                className={`
                group p-6 rounded-xl border transition-all duration-300 cursor-pointer
                ${cat.active
                                        ? "bg-indigo-600 text-white border-indigo-600"
                                        : "bg-white hover:shadow-lg hover:-translate-y-1"
                                    }
              `}
                            >
                                <Icon
                                    size={32}
                                    className={`mb-4 ${cat.active
                                            ? "text-white"
                                            : "text-indigo-600 group-hover:text-indigo-600"
                                        }`}
                                />

                                <h3 className="font-semibold text-lg">
                                    {cat.name}
                                </h3>

                                <p
                                    className={`mt-2 text-sm ${cat.active
                                            ? "text-indigo-100"
                                            : "text-gray-500"
                                        }`}
                                >
                                    {cat.jobs} jobs available →
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}