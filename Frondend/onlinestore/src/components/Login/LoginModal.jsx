import React, { useState } from 'react';
import { Login} from './Login.js';  // Import login function from login.js
import './LoginModal.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateUsername = (value) => {
    const usernameRegex = /^[^\s]{3,8}$/;
    if (!usernameRegex.test(value)) {
      setUsernameError('Username must be 3–8 characters with no spaces');
    } else {
      setUsernameError('');
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.');
    } else {
      setPasswordError('');
    }
  };  

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  // State for form inputs and error message
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State for custom alert visibility
  const [alertMessage, setAlertMessage] = useState(''); // State for alert message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  // Handle form submission
  const handleLogin = async () => {
    try {
      // Clear any previous errors
      setError('');
      setShowAlert(false); // Hide alert before new login attempt
      setSuccessMessage(''); // Clear previous success message
      // Call the login function from login.js
      const data = await Login(username, password);

      if (data.success === 'FAIL') {
        setAlertMessage(data.message); // Set the error message
        setShowAlert(true); // Show the alert
        setError(data.message); // Optionally show in modal
        return;
      }
      setSuccessMessage('Login successful! thank for using this application');
setTimeout(() => {
  setSuccessMessage('');
  onClose(); // Close modal after 3 seconds
}, 3000);
    } catch (err) {
      console.error('Error during login:', err);
      setAlertMessage('An error occurred. Please try again.');
      setShowAlert(true); // Show alert
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={handleUsernameChange}
        />
        {usernameError && <div className="error-message">{usernameError}</div>}

        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="login-input"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="eye-icon"
            onClick={togglePassword}
            aria-label="Toggle password visibility"
          />
        </div>
        {passwordError && <div className="error-message">{passwordError}</div>}

        <button className="next-button" disabled={usernameError || passwordError} onClick={handleLogin}>
          Login
        </button>
        {error && <div className="error-message">{error}</div>}

        <div className="register-link">
          Don’t have an account? <span className="register-here">Register here</span>
        </div>

        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    {/* Custom Error Popup Modal */}
    {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-content">
            <h2>{alertMessage}</h2>
            <button className="close-alert" onClick={() => setShowAlert(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    {/* Success Message in Top-Right Corner */}
    {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default LoginModal;