import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Interceptors for adding auth token if needed in the future
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth-storage'); // Example based on standard Zustand persist name if used
        if (token) {
            try {
                const parsed = JSON.parse(token);
                if (parsed.state && parsed.state.token) {
                    config.headers.Authorization = `Bearer ${parsed.state.token}`;
                }
            } catch (e) {}
        }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
