const API_URL = import.meta.env.VITE_API_URL;

// 1️⃣ Get CSRF cookie (call once before login or first request)
export const getCsrfCookie = async () => {
  await fetch(`${API_URL}/sanctum/csrf-cookie`, {
    credentials: "include",
  });
};

// 2️⃣ Generic API request
export const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
};
