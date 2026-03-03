import JobCard from "./ui/JobCard";
const jobs = [
    {
        company: "Revolut",
        title: "Email Marketing",
        location: "Madrid, Spain",
        type: "Full Time",
        logo: "/logos/revolut.png",
        tags: ["Marketing", "Design"],
    },
    {
        company: "Dropbox",
        title: "Brand Designer",
        location: "San Fransisco, US",
        type: "Full Time",
        logo: "/logos/dropbox.png",
        tags: ["Design", "Business"],
    },
    {
        company: "Pitch",
        title: "Email Marketing",
        location: "Berlin, Germany",
        type: "Full Time",
        logo: "/logos/pitch.png",
        tags: ["Marketing"],
    },
    {
        company: "Blinkist",
        title: "Visual Designer",
        location: "Granada, Spain",
        type: "Full Time",
        logo: "/logos/blinkist.png",
        tags: ["Design"],
    },
    {
        company: "ClassPass",
        title: "Product Designer",
        location: "Manchester, UK",
        type: "Full Time",
        logo: "/logos/classpass.png",
        tags: ["Marketing", "Design"],
    },
    {
        company: "Canva",
        title: "Lead Designer",
        location: "Ontario, Canada",
        type: "Full Time",
        logo: "/logos/canva.png",
        tags: ["Design", "Business"],
    },
    {
        company: "GoDaddy",
        title: "Brand Strategist",
        location: "Marseille, France",
        type: "Full Time",
        logo: "/logos/godaddy.png",
        tags: ["Marketing"],
    },
    {
        company: "Twitter",
        title: "Data Analyst",
        location: "San Diego, US",
        type: "Full Time",
        logo: "/logos/twitter.png",
        tags: ["Technology"],
    },
];

export default function FeaturedJobs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Featured <span className="text-blue-500">jobs</span>
                    </h2>

                    <button className="text-blue-600 font-medium hover:underline">
                        Show all jobs →
                    </button>
                </div>

                {/* Grid */}
                <div className="grid gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4">

                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

            </div>
        </section>
    );
}