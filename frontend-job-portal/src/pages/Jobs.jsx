import { useEffect, useState } from "react";
import { apiRequest } from "../api/apiClient";

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const data = await apiRequest("/api/jobs");
                setJobs(data);
            } catch (err) {
                console.error(err);
            }
        };
        loadJobs();
    }, []);

    return (
        <div>
            <h2>Available Jobs</h2>
            {jobs.map(job => (
                <div key={job.id} style={{ border: "1px solid #0c0", padding: "10px", margin: "5px" }}>
                    <p><strong>Title:</strong> {job.title}</p>
                    <p><strong>Description:</strong> {job.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Jobs;