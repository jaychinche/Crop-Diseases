import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage({ modelStatus }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🌾 Crop Health Monitor</h1>
          <p className="hero-subtitle">
            AI-Powered Disease Detection for Your Farm
          </p>
          <p className="hero-description">
            Detect and diagnose tomato crop diseases instantly using advanced AI technology. Get treatment recommendations and preventive strategies tailored for farmers.
          </p>

          <div className="hero-buttons">
            <Link to="/predict" className="btn btn-primary btn-large">
              Start Prediction
            </Link>
            <Link to="/diseases" className="btn btn-outline btn-large">
              Learn About Diseases
            </Link>
          </div>

          {modelStatus === "loaded" ? (
            <div className="alert alert-success">
              ✓ AI Model is ready! You can start predictions now.
            </div>
          ) : (
            <div className="alert alert-warning">
              ⚠ AI Model is loading. Some features may be limited.
            </div>
          )}
        </div>

        <div className="hero-image">
          <div className="plant-icon">🌱</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Crop Health Monitor?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Quick Detection</h3>
            <p>
              Identify diseases in seconds using your smartphone or camera. Get instant results without waiting for expert consultation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💊</div>
            <h3>Treatment Guide</h3>
            <p>
              Receive detailed treatment recommendations and preventive strategies for each disease identified on your crops.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track History</h3>
            <p>
              Keep detailed records of all your crops' health checks. Monitor trends and improvements over time.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>
              Use on any device - phone, tablet, or computer. Works offline and syncs your data automatically.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Precise Results</h3>
            <p>
              Our AI model is trained on thousands of crop images with 95%+ accuracy rate for disease detection.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Cost Effective</h3>
            <p>
              Save money on expensive farm consultants. Get professional-grade diagnostics at a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Capture Image</h3>
            <p>Take a clear photo of the affected leaf or plant using your phone or camera.</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Upload & Analyze</h3>
            <p>Upload the image to our AI system for instant analysis and disease identification.</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Results</h3>
            <p>Receive disease diagnosis with confidence level and detailed information.</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">4</div>
            <h3>Take Action</h3>
            <p>Follow treatment and prevention recommendations to save your crops.</p>
          </div>
        </div>
      </section>

      {/* Disease Categories */}
      <section className="disease-categories">
        <h2>Diseases We Detect</h2>
        <div className="diseases-grid">
          <div className="disease-item">
            <h4>🦠 Bacterial Spot</h4>
            <p>Dark, greasy spots on leaves and fruits</p>
          </div>

          <div className="disease-item">
            <h4>🍂 Early Blight</h4>
            <p>Brown spots with concentric rings</p>
          </div>

          <div className="disease-item">
            <h4>💧 Late Blight</h4>
            <p>Water-soaked spots with white mold</p>
          </div>

          <div className="disease-item">
            <h4>🌫️ Leaf Mold</h4>
            <p>Yellow spots with grayish mold</p>
          </div>

          <div className="disease-item">
            <h4>⚫ Septoria Spot</h4>
            <p>Circular spots with dark borders</p>
          </div>

          <div className="disease-item">
            <h4>🕷️ Spider Mites</h4>
            <p>Fine webbing and yellow stippling</p>
          </div>

          <div className="disease-item">
            <h4>🎯 Target Spot</h4>
            <p>Circular spots with concentric rings</p>
          </div>

          <div className="disease-item">
            <h4>🦗 TYLCV</h4>
            <p>Yellowing and leaf curling</p>
          </div>

          <div className="disease-item">
            <h4>🧬 Tomato Mosaic</h4>
            <p>Mottled leaves and stunted growth</p>
          </div>

          <div className="disease-item">
            <h4>✅ Healthy</h4>
            <p>No signs of disease detected</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Protect Your Crops?</h2>
        <p>Start using Crop Health Monitor today and get instant disease detection</p>
        <Link to="/predict" className="btn btn-primary btn-large">
          Start Your First Prediction
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
