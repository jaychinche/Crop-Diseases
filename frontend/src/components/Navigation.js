import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ modelStatus }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🌾</span>
          Crop Health Monitor
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/predict" className="nav-link">
              Predict Disease
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/diseases" className="nav-link">
              Disease Info
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <span className={`status-badge status-${modelStatus}`}>
              {modelStatus === "loaded" ? "✓ Model Ready" : "⚠ Model Loading"}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
