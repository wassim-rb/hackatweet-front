import React from 'react';
import styles from '../styles/SignUpModal.module.css'; 

const SignUpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
          <h2>Create your Hackatweet account</h2>
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={onClose}>Sign up</button>
        </div>
      </div>
    );
  };
  

export default SignUpModal;