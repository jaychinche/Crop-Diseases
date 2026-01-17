import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./HistoryPage.css";

function HistoryPage() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    try {
      const response = await api.getPredictions();
      if (response.success) {
        setPredictions(response.predictions);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await api.deletePrediction(id);
      setPredictions(predictions.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredPredictions =
    filter === "all"
      ? predictions
      : predictions.filter((p) => p.disease_name === filter);

  const uniqueDiseases = [...new Set(predictions.map((p) => p.disease_name))];

  if (loading) {
    return (
      <div className="history-page">
        <div className="container">
          <h1>📋 Prediction History</h1>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="history-page">
      <div className="container">
        <h1>📋 Prediction History</h1>
        <p className="subtitle">View and manage all your previous predictions</p>

        {error && <div className="alert alert-error">❌ {error}</div>}

        {predictions.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>No predictions yet</h3>
            <p>Make your first disease prediction to see it here</p>
            <a href="/predict" className="btn btn-primary">
              Start Predicting
            </a>
          </div>
        ) : (
          <>
            {/* Filter */}
            <div className="filter-section">
              <label htmlFor="disease-filter">Filter by Disease:</label>
              <select
                id="disease-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Diseases ({predictions.length})</option>
                {uniqueDiseases.map((disease) => (
                  <option key={disease} value={disease}>
                    {disease} (
                    {predictions.filter((p) => p.disease_name === disease).length}
                    )
                  </option>
                ))}
              </select>
            </div>

            {/* Predictions Grid */}
            <div className="predictions-grid">
              {filteredPredictions.map((prediction) => (
                <div key={prediction.id} className="prediction-card">
                  <div className="card-header">
                    <h3>{prediction.disease_name}</h3>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(prediction.id)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>

                  <div className="card-image">
                    <img src={prediction.image_filename} alt="Prediction" />
                  </div>

                  <div className="card-content">
                    <div className="confidence">
                      <div className="confidence-bar">
                        <div
                          className="confidence-fill"
                          style={{ width: `${prediction.confidence}%` }}
                        ></div>
                      </div>
                      <span className="confidence-text">
                        {prediction.confidence}%
                      </span>
                    </div>

                    <div className="details">
                      <p>
                        <strong>📅 Date:</strong> {prediction.timestamp}
                      </p>
                      <p>
                        <strong>📍 Location:</strong>{" "}
                        {prediction.farm_location || "Not specified"}
                      </p>
                      {prediction.farmer_notes && (
                        <p>
                          <strong>📝 Notes:</strong> {prediction.farmer_notes}
                        </p>
                      )}
                    </div>

                    <a
                      href={`/history/${prediction.id}`}
                      className="btn btn-primary btn-small"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;
