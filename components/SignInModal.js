import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import React from 'react';
import styles from '../styles/SignInModal.module.css'; 

const SignInModal = ({ isOpen, onClose }) => {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');


  const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};


    if (!isOpen) return null;
  
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          <h2>Connect to your Hackatweet account</h2>
          <input type="text" placeholder="Username"  onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}/>
          <input type="password" placeholder="Password"  onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
          <button onClick={() => handleConnection()}>Sign in</button>
        </div>
      </div>
    );
  };
  

export default SignInModal;