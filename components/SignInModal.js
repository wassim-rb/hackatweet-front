import React from 'react';
import styles from '../styles/SignInModal.module.css'; 

const SignInModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          <h2>Connect to your Hackatweet account</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={onClose}>Sign in</button>
        </div>
      </div>
    );
  };
  

export default SignInModal;