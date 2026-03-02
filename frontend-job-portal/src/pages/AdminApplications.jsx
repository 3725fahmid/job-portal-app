import { useEffect, useState } from "react";
import { apiRequest } from "../api/apiClient";

function AdminApplications() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await apiRequest("/api/applications/all"); // Admin route
                setApplications(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>All Applications (Admin)</h2>
            {applications.map(app => (
                <div key={app.id} style={{ border: "1px solid #f00", padding: "10px", margin: "5px" }}>
                    <p><strong>Name:</strong> {app.name}</p>
                    <p><strong>Email:</strong> {app.email}</p>
                    <p><strong>Job ID:</strong> {app.job_id}</p>
                    <p><strong>Resume:</strong> {app.resume_link}</p>
                </div>
            ))}
        </div>
    );
}

export default AdminApplications;