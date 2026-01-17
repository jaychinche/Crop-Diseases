import React, { useState } from "react";
import api from "../services/api";
import "./PredictPage.css";

function PredictPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    farm_location: "",
    farmer_notes: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", image);
      uploadFormData.append("farm_location", formData.farm_location);
      uploadFormData.append("farmer_notes", formData.farmer_notes);

      const response = await api.predictDisease(uploadFormData);

      if (response.success) {
        setResult(response);
      } else {
        setError(response.error || "Prediction failed");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
    setFormData({ farm_location: "", farmer_notes: "" });
  };

  return (
    <div className="predict-page">
      <div className="container">
        <h1>🔍 Predict Crop Disease</h1>
        <p className="subtitle">
          Upload a clear image of your plant leaf or fruit to detect diseases
        </p>

        <div className="predict-container">
          {/* Upload Section */}
          {!result && (
            <form onSubmit={handleSubmit} className="predict-form">
              <div className="form-group">
                <label htmlFor="image-upload" className="upload-label">
                  <div className="upload-box">
                    {preview ? (
                      <img src={preview} alt="Preview" className="preview-image" />
                    ) : (
                      <>
                        <div className="upload-icon">📸</div>
                        <p>Click or drag to upload image</p>
                        <small>PNG, JPG up to 16MB</small>
                      </>
                    )}
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={loading}
                    style={{ display: "none" }}
                  />
                </label>
              </div>

              {preview && (
                <>
                  <div className="form-group">
                    <label htmlFor="location">Farm Location (Optional)</label>
                    <input
                      id="location"
                      type="text"
                      name="farm_location"
                      value={formData.farm_location}
                      onChange={handleInputChange}
                      placeholder="e.g., Field A, North Farm"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Farmer Notes (Optional)</label>
                    <textarea
                      id="notes"
                      name="farmer_notes"
                      value={formData.farmer_notes}
                      onChange={handleInputChange}
                      placeholder="Describe any additional observations about the plant..."
                    ></textarea>
                  </div>
                </>
              )}

              {error && <div className="alert alert-error">❌ {error}</div>}

              <div className="form-buttons">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!image || loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-small"></span> Analyzing...
                    </>
                  ) : (
                    "Predict Disease"
                  )}
                </button>
                {preview && (
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setPreview(null)}
                  >
                    Change Image
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Results Section */}
          {result && (
            <div className="result-section">
              <div className="result-header">
                <h2>✅ Prediction Complete</h2>
              </div>

              <div className="result-grid">
                <div className="result-image">
                  <img src={result.image_url} alt="Analyzed" />
                </div>

                <div className="result-info">
                  <div className="disease-result">
                    <h3>Detected Disease</h3>
                    <p className="disease-name">{result.disease_name}</p>
                    <div className="confidence-bar">
                      <div
                        className="confidence-fill"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                    <p className="confidence-text">
                      Confidence: {result.confidence}%
                    </p>
                  </div>

                  {result.disease_info && (
                    <div className="disease-details">
                      <h4>Disease Information</h4>
                      <div className="detail-item">
                        <strong>Name:</strong> {result.disease_info.name}
                      </div>
                      <div className="detail-item">
                        <strong>Description:</strong>{" "}
                        {result.disease_info.description}
                      </div>
                      <div className="detail-item">
                        <strong>Severity:</strong>
                        <span className={`badge badge-${result.disease_info.severity.toLowerCase()}`}>
                          {result.disease_info.severity}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {result.disease_info && (
                <div className="treatment-section">
                  <div className="treatment-column">
                    <h4>💊 Treatment</h4>
                    <ul className="treatment-list">
                      {result.disease_info.treatment.map((item, idx) => (
                        <li key={idx}>
                          <span className="checkmark">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="treatment-column">
                    <h4>🛡️ Prevention</h4>
                    <ul className="treatment-list">
                      {result.disease_info.prevention.map((item, idx) => (
                        <li key={idx}>
                          <span className="checkmark">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="result-actions">
                <button className="btn btn-primary" onClick={handleReset}>
                  Make Another Prediction
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PredictPage;
