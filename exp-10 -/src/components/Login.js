// src/components/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleSignIn } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error: ", err);
      setError(err.message || "Failed to log in.");
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (err) {
      console.error("Error during Google Sign-In: ", err.message);
      setError(err.message || "Google Sign-In failed. Please try again later.");
    }
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: 'lightblue', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="d-flex justify-content-center">
        <div className="card shadow-lg" style={{ width: '400px' }}>
          <div className="card-body">
            <h2 className="card-title text-center">Login</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" 
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" 
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-50">Login</button>
              </div>
            </form>
            {/* Google Sign-In Button */}
            <div className="d-flex justify-content-center mt-3">
              <button onClick={handleGoogleSignIn} className="btn btn-outline-primary w-50 d-flex align-items-center justify-content-center">
                <img
                  src="https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png"
                  alt="Google Logo"
                  style={{ width: '20px', marginRight: '10px' }}
                />
                Google
              </button>
            </div>
            <p className="text-center mt-3">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
