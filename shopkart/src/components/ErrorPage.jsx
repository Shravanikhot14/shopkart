import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center px-3 py-5">
        {/* Error Illustration */}
        <div className="mb-3">
          <span
            className="display-1 fw-bold text-primary"
            style={{ fontSize: 'clamp(6rem, 20vw, 12rem)' }}
          >
            404
          </span>
        </div>

        {/* Error Message */}
        <h1 className="fw-bold mb-3">
          Oops! Page Not Found
        </h1>

        <p className="text-secondary fs-5 mb-4 mx-auto"
           style={{ maxWidth: '500px' }}>
          The page you're looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Link to="/" className="btn btn-primary btn-lg px-4">
            <i className="bi bi-house-door me-2"></i>
            Go to Home
          </Link>

          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={() => navigate(-1)}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="text-muted small mt-5 mb-0">
          Error Code: 404 | Lost in cyberspace?
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;