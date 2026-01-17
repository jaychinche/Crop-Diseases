import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./DashboardPage.css";

function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.getStatistics();
      if (response.success) {
        setStats(response);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="container">
          <h1>📊 Dashboard</h1>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="container">
        <h1>📊 Farm Analytics Dashboard</h1>
        <p className="subtitle">Monitor your crop health status and prediction statistics</p>

        {error && <div className="alert alert-error">❌ {error}</div>}

        {stats && (
          <>
            {/* Overview Cards */}
            <div className="cards-grid">
              <div className="stat-card">
                <div className="stat-icon">📸</div>
                <div className="stat-content">
                  <h3>{stats.total_predictions}</h3>
                  <p>Total Predictions</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <h3>{stats.average_confidence.toFixed(1)}%</h3>
                  <p>Average Confidence</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-content">
                  <h3>{stats.disease_distribution["Tomato___healthy"] || 0}</h3>
                  <p>Healthy Predictions</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🦠</div>
                <div className="stat-content">
                  <h3>
                    {Object.keys(stats.disease_distribution).length}
                  </h3>
                  <p>Diseases Detected</p>
                </div>
              </div>
            </div>

            {/* Disease Distribution */}
            <div className="chart-section">
              <h2>Disease Distribution</h2>
              <div className="disease-distribution">
                {Object.entries(stats.disease_distribution)
                  .sort((a, b) => b[1] - a[1])
                  .map(([disease, count]) => (
                    <div key={disease} className="distribution-item">
                      <div className="distribution-info">
                        <span className="disease-name">
                          {disease.replace(/Tomato___/, "").replace(/_/g, " ")}
                        </span>
                        <span className="disease-count">{count}</span>
                      </div>
                      <div className="distribution-bar-container">
                        <div
                          className="distribution-bar"
                          style={{
                            width: `${
                              (count / stats.total_predictions) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="percentage">
                        {(
                          (count / stats.total_predictions) *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Tips Section */}
            <div className="tips-section">
              <h2>💡 Farm Management Tips</h2>
              <div className="tips-grid">
                <div className="tip-card">
                  <h4>🌱 Regular Monitoring</h4>
                  <p>
                    Check your crops weekly using this app to catch diseases early
                    and prevent spread.
                  </p>
                </div>

                <div className="tip-card">
                  <h4>📸 Quality Images</h4>
                  <p>
                    Take clear, well-lit photos of affected areas for more accurate
                    disease detection.
                  </p>
                </div>

                <div className="tip-card">
                  <h4>📋 Keep Records</h4>
                  <p>
                    Document all predictions with notes and farm location for better
                    tracking and analysis.
                  </p>
                </div>

                <div className="tip-card">
                  <h4>🔄 Follow Up</h4>
                  <p>
                    After treatment, take follow-up photos to monitor the effectiveness
                    of your actions.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
