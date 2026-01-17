import React, { useState } from "react";
import "./SettingsPage.css";

function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "en",
    defaultLocation: "",
    autoSave: true,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("appSettings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings({
      notifications: true,
      darkMode: false,
      language: "en",
      defaultLocation: "",
      autoSave: true,
    });
  };

  return (
    <div className="settings-page">
      <div className="container">
        <h1>⚙️ Settings</h1>
        <p className="subtitle">Customize your Crop Health Monitor experience</p>

        {saved && (
          <div className="alert alert-success">
            ✓ Settings saved successfully!
          </div>
        )}

        <div className="settings-container">
          {/* Notification Settings */}
          <div className="settings-section">
            <h2>🔔 Notifications</h2>

            <div className="setting-item">
              <div className="setting-label">
                <label htmlFor="notifications">
                  <strong>Enable Notifications</strong>
                </label>
                <p>Get alerts for important updates and disease detections</p>
              </div>
              <input
                id="notifications"
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="toggle-checkbox"
              />
            </div>
          </div>

          {/* Preference Settings */}
          <div className="settings-section">
            <h2>🎨 Preferences</h2>

            <div className="setting-item">
              <div className="setting-label">
                <label htmlFor="darkMode">
                  <strong>Dark Mode</strong>
                </label>
                <p>Use dark theme for better visibility in low light</p>
              </div>
              <input
                id="darkMode"
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="toggle-checkbox"
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <label htmlFor="language">
                  <strong>Language</strong>
                </label>
                <p>Select your preferred language</p>
              </div>
              <select
                id="language"
                name="language"
                value={settings.language}
                onChange={handleChange}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी (Hindi)</option>
                <option value="es">Español (Spanish)</option>
                <option value="pt">Português (Portuguese)</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <label htmlFor="defaultLocation">
                  <strong>Default Farm Location</strong>
                </label>
                <p>Your primary farm location for predictions</p>
              </div>
              <input
                id="defaultLocation"
                type="text"
                name="defaultLocation"
                value={settings.defaultLocation}
                onChange={handleChange}
                placeholder="e.g., Main Field, Farm A"
              />
            </div>
          </div>

          {/* Data Settings */}
          <div className="settings-section">
            <h2>💾 Data & Storage</h2>

            <div className="setting-item">
              <div className="setting-label">
                <label htmlFor="autoSave">
                  <strong>Auto-Save Predictions</strong>
                </label>
                <p>Automatically save prediction data locally</p>
              </div>
              <input
                id="autoSave"
                type="checkbox"
                name="autoSave"
                checked={settings.autoSave}
                onChange={handleChange}
                className="toggle-checkbox"
              />
            </div>

            <div className="data-actions">
              <button className="btn btn-outline btn-small">
                📥 Export Data
              </button>
              <button className="btn btn-outline btn-small">
                📤 Import Data
              </button>
              <button className="btn btn-danger btn-small">
                🗑️ Clear Cache
              </button>
            </div>
          </div>

          {/* Help & Support */}
          <div className="settings-section">
            <h2>❓ Help & Support</h2>

            <div className="support-links">
              <a href="#faq" className="support-link">
                📚 FAQ
              </a>
              <a href="#tutorial" className="support-link">
                🎓 Tutorial
              </a>
              <a href="#contact" className="support-link">
                📧 Contact Support
              </a>
              <a href="#terms" className="support-link">
                📜 Terms & Privacy
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="settings-section about-section">
            <h2>ℹ️ About</h2>
            <div className="about-content">
              <p>
                <strong>Crop Health Monitor v1.0</strong>
              </p>
              <p>
                An AI-powered disease detection system designed to help farmers
                identify and manage crop diseases effectively.
              </p>
              <p>
                <strong>Developed with ❤️ for farmers worldwide</strong>
              </p>
              <p>© 2026 Crop Health Monitor. All rights reserved.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="settings-actions">
            <button onClick={handleSave} className="btn btn-primary btn-large">
              💾 Save Settings
            </button>
            <button onClick={handleReset} className="btn btn-outline btn-large">
              ↺ Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
