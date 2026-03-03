import React from "react";

const jobs = [
  {
    company: "Nomad",
    title: "Social Media Assistant",
    location: "Paris, France",
    type: "Full Time",
    logo: "/logos/nomad.png",
    tags: ["Marketing", "Design"],
  },
  {
    company: "Netlify",
    title: "Social Media Assistant",
    location: "Paris, France",
    type: "Full Time",
    logo: "/logos/netlify.png",
    tags: ["Marketing", "Design"],
  },
  {
    company: "Dropbox",
    title: "Brand Designer",
    location: "San Francisco, USA",
    type: "Full Time",
    logo: "/logos/dropbox.png",
    tags: ["Marketing", "Design"],
  },
  {
    company: "Maze",
    title: "Brand Designer",
    location: "San Francisco, USA",
    type: "Full Time",
    logo: "/logos/maze.png",
    tags: ["Marketing", "Design"],
  },
  {
    company: "Terraform",
    title: "Interactive Developer",
    location: "Hamburg, Germany",
    type: "Full Time",
    logo: "/logos/terraform.png",
    tags: ["Marketing", "Design"],
  },
  {
    company: "Udacity",
    title: "Interactive Developer",
    location: "Hamburg, Germany",
    type: "Full Time",
    logo: "/logos/udacity.png",
    tags: ["Marketing", "Design"],
  },
  {
    company: "Packer",
    title: "HR Manager",
    location: "Lucern, Switzerland",
    type: "Full Time",
    logo: "/logos/packer.png",
    tags: ["Marketing", "Design"],
  },
  {
    company: "Webflow",
    title: "HR Manager",
    location: "Lucern, Switzerland",
    type: "Full Time",
    logo: "/logos/webflow.png",
    tags: ["Marketing", "Design"],
  },
];

export default function LatestJobs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>

          <button className="text-blue-600 font-medium hover:underline">
            Show all jobs →
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group border rounded-xl p-6 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-5">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xs border border-indigo-500 text-indigo-600 px-3 py-1 rounded">
                  {job.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.company} • {job.location}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-400 mt-4 line-clamp-2">
                {job.company} is looking for talented people to join
                their growing team and build amazing products.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-indigo-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
