import { useEffect } from "react";
import { getCsrfCookie } from "./api/apiClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import AdminApplications from "./pages/AdminApplications";
// import Login from "./pages/Login";

function App() {
  useEffect(() => {
    // Get CSRF cookie once at app start
    getCsrfCookie();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public page */}
        <Route path="/jobs" element={<Jobs />} />

        {/* User pages (requires login) */}
        <Route path="/applications" element={<Applications />} />

        {/* Admin page (requires admin login) */}
        <Route path="/admin/applications" element={<AdminApplications />} />

        {/* Login page */}
        {/* <Route path="/login" element={<Login />} /> */}

        {/* Default route */}
        <Route path="*" element={<Jobs />} />
      </Routes>
    </Router>
  );
}

export default App;