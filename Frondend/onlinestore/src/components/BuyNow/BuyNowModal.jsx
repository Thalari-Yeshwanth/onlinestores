import React from 'react';
import './BuyNowModal.css';

const BuyNowModal = ({ title, onClose, onContinue }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>You chose to buy </h2>
        <h2>{title}</h2>
        <div className="modal-buttons">
          <button className="close-button" onClick={onClose}>
          X
          </button>
          <button className="continue-button" onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;  