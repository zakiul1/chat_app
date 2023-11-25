import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // Replace with your API base URL
    timeout: 10000, // Timeout duration in milliseconds
    headers: {
        'Content-Type': 'application/json',
        // Add any default headers here
    },
});

// Add interceptors or any other configurations as needed
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify the request config before sending
        // For example, add authentication token
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Handle success responses
        return response;
    },
    (error) => {
        // Handle error responses
        return Promise.reject(error);
    }
);

export default axiosInstance;
