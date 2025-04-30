import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
    console.log('Login Modal is displayed');  // Log to check if the modal is rendered

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="UserName"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <button className="next-button">Login</button>
        
        <div className="register-link">
          Don't have an account? <span className="register-here">Register here</span>
        </div>

        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginModal;
