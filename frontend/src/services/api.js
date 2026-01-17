const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Get auth token from localStorage
const getToken = () => localStorage.getItem('token');

// Helper function to make authenticated requests
const makeRequest = async (url, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'API request failed');
  }

  return data;
};

const api = {
  // ==================== AUTHENTICATION ====================
  
  // Signup
  signupUser: async (name, email, password, farm_name) => {
    return makeRequest(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password, farm_name }),
    });
  },

  // Login
  loginUser: async (email, password) => {
    return makeRequest(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Verify token
  verifyToken: async () => {
    return makeRequest(`${API_BASE_URL}/auth/verify`, {
      method: 'GET',
    });
  },

  // ==================== PREDICTIONS ====================

  // Health check
  checkHealth: async () => {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  },

  // Predict disease
  predictDisease: async (disease, confidence, farm_location = '', notes = '') => {
    return makeRequest(`${API_BASE_URL}/predict`, {
      method: 'POST',
      body: JSON.stringify({
        disease,
        confidence,
        farm_location,
        notes,
      }),
    });
  },

  // Get all predictions
  getPredictions: async () => {
    return makeRequest(`${API_BASE_URL}/predictions`, {
      method: 'GET',
    });
  },

  // Get single prediction
  getPrediction: async (id) => {
    return makeRequest(`${API_BASE_URL}/predictions/${id}`, {
      method: 'GET',
    });
  },

  // Update prediction
  updatePrediction: async (id, data) => {
    return makeRequest(`${API_BASE_URL}/predictions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Delete prediction
  deletePrediction: async (id) => {
    return makeRequest(`${API_BASE_URL}/predictions/${id}`, {
      method: 'DELETE',
    });
  },

  // ==================== DISEASES ====================

  // Get all diseases
  getDiseases: async () => {
    const response = await fetch(`${API_BASE_URL}/diseases`);
    if (!response.ok) {
      throw new Error('Failed to fetch diseases');
    }
    return response.json();
  },

  // ==================== STATISTICS ====================

  // Get statistics
  getStatistics: async () => {
    return makeRequest(`${API_BASE_URL}/statistics`, {
      method: 'GET',
    });
  },
};

export default api;

// Named exports for convenience
export const {
  signupUser,
  loginUser,
  verifyToken,
  checkHealth,
  predictDisease,
  getPredictions,
  getPrediction,
  updatePrediction,
  deletePrediction,
  getDiseases,
  getStatistics,
} = api;
