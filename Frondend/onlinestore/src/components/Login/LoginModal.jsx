import React, { useState } from 'react';
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
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('Min 6 chars, must include letters and numbers');
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

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>

        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          className="login-input"
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

        <button className="next-button" disabled={usernameError || passwordError}>
          Login
        </button>

        <div className="register-link">
          Don’t have an account? <span className="register-here">Register here</span>
        </div>

        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
