import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupPage.css';
import { signupUser } from '../services/api';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    farm_name: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      throw new Error('Full name is required');
    }

    if (!formData.email.includes('@')) {
      throw new Error('Please enter a valid email');
    }

    if (formData.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    if (formData.password !== formData.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (!formData.farm_name.trim()) {
      throw new Error('Farm name is required');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate form
      validateForm();

      // Call signup API
      const response = await signupUser(
        formData.name,
        formData.email,
        formData.password,
        formData.farm_name
      );

      // Save token
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Logo Section */}
        <div className="signup-logo">
          <div className="logo-icon">🌾</div>
          <h1>Join Crop Guard</h1>
          <p>Protect Your Farm Today</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="name">👤 Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              disabled={loading}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">📧 Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={loading}
              required
            />
          </div>

          {/* Farm Name Field */}
          <div className="form-group">
            <label htmlFor="farm_name">🚜 Farm Name</label>
            <input
              type="text"
              id="farm_name"
              name="farm_name"
              value={formData.farm_name}
              onChange={handleChange}
              placeholder="Enter your farm name"
              disabled={loading}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">🔐 Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min 6 characters"
                disabled={loading}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">✓ Confirm Password</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                disabled={loading}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="terms">
            <label>
              <input type="checkbox" required />
              I agree to the <Link to="/terms">Terms & Conditions</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="signup-btn"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Login Link */}
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="signup-benefits">
        <h2>🌱 Get Started in 3 Easy Steps</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <div className="benefit-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your account with your farm details</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">2</div>
            <h3>Upload Image</h3>
            <p>Take a photo of your crop using your phone</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">3</div>
            <h3>Get Results</h3>
            <p>Instant disease detection and treatment advice</p>
          </div>
        </div>

        <div className="benefits-highlight">
          <h3>✨ Why Farmers Love Us</h3>
          <ul>
            <li>✓ Easy to use - No technical knowledge needed</li>
            <li>✓ Fast results - Get diagnosis in seconds</li>
            <li>✓ Accurate - AI-powered detection</li>
            <li>✓ Cost effective - Reduce crop losses</li>
            <li>✓ Expert advice - Treatment recommendations</li>
            <li>✓ Track history - Monitor your farm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
