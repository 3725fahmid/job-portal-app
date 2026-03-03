export default function JobCard({ job }) {
    return (
        <div
            className="
      group border rounded-xl p-6 bg-white
      transition-all duration-300
      hover:shadow-xl hover:-translate-y-2
      cursor-pointer"
        >
            {/* Top */}
            <div className="flex justify-between items-center mb-5">
                <img
                    src={job.logo}
                    alt={job.company}
                    className="w-10 h-10 object-contain"
                />

                <span className="text-xs border border-indigo-500
          text-indigo-600 px-3 py-1 rounded">
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
                {job.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
                {job.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full
            bg-gray-100 text-gray-600
            group-hover:bg-indigo-50"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}