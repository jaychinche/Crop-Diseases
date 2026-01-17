import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./DiseaseInfoPage.css";

function DiseaseInfoPage() {
  const [diseases, setDiseases] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedDisease, setSelectedDisease] = useState(null);

  useEffect(() => {
    fetchDiseases();
  }, []);

  const fetchDiseases = async () => {
    try {
      const response = await api.getDiseases();
      if (response.success) {
        setDiseases(response.diseases);
        setSelectedDisease(Object.keys(response.diseases)[0]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="disease-info-page">
        <div className="container">
          <h1>🦠 Disease Information</h1>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  const selected = diseases[selectedDisease] || {};

  return (
    <div className="disease-info-page">
      <div className="container">
        <h1>🦠 Disease Information</h1>
        <p className="subtitle">
          Learn about tomato crop diseases and how to manage them
        </p>

        <div className="disease-container">
          {/* Disease List */}
          <div className="disease-list">
            <h3>All Diseases</h3>
            <div className="disease-menu">
              {Object.entries(diseases).map(([key, disease]) => (
                <button
                  key={key}
                  className={`disease-menu-item ${
                    selectedDisease === key ? "active" : ""
                  }`}
                  onClick={() => setSelectedDisease(key)}
                >
                  {disease.name}
                </button>
              ))}
            </div>
          </div>

          {/* Disease Details */}
          <div className="disease-details">
            {selected && (
              <>
                <h2>{selected.name}</h2>

                <div className="disease-card">
                  <div className="info-section">
                    <h4>📋 Description</h4>
                    <p>{selected.description}</p>
                  </div>

                  <div className="severity-badge">
                    <strong>Severity Level:</strong>
                    <span className={`badge badge-${selected.severity.toLowerCase()}`}>
                      {selected.severity}
                    </span>
                  </div>

                  <div className="info-section">
                    <h4>💊 Treatment Recommendations</h4>
                    <ul className="recommendations-list">
                      {selected.treatment.map((item, idx) => (
                        <li key={idx}>
                          <span className="checkmark">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="info-section">
                    <h4>🛡️ Prevention Methods</h4>
                    <ul className="recommendations-list">
                      {selected.prevention.map((item, idx) => (
                        <li key={idx}>
                          <span className="checkmark">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedDisease !== "Tomato___healthy" && (
                    <div className="action-section">
                      <p className="warning">
                        ⚠️ If you suspect this disease, upload an image on the{" "}
                        <a href="/predict">Predict page</a> for confirmation.
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Quick Reference */}
        <div className="quick-reference">
          <h2>Quick Reference Guide</h2>
          <div className="reference-grid">
            {Object.entries(diseases).map(([key, disease]) => (
              <div key={key} className="reference-card">
                <h4>{disease.name}</h4>
                <p>{disease.description}</p>
                <div className={`severity-badge badge-${disease.severity.toLowerCase()}`}>
                  {disease.severity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiseaseInfoPage;
