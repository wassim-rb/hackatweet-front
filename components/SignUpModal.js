import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import React from 'react';
import styles from '../styles/SignUpModal.module.css'; 

const SignUpModal = ({ isOpen, onClose }) => {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);


  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstName, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
					setSignUpFirstName('');
          setSignUpUsername('');
					setSignUpPassword('');
				}
			});
	};

    if (!isOpen) return null;
  
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
          <h2>Create your Hackatweet account</h2>
          <input type="text" placeholder="Firstname" onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName}/>
          <input type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}/>
          <input type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
          <button onClick={() => handleRegister()}>Sign up</button>
        </div>
      </div>
    );
  };
  

export default SignUpModal;