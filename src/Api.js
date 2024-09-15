const API_URL = 'https://api.jobconnect.com';

export const fetchJobs = async () => {
  const response = await fetch(`${API_URL}/jobs`);
  return response.json();
};

// Add more functions for login, registration, job applications, etc.
