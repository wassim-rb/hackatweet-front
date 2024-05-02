import React from 'react';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';



function Home() {

  const [isModalUpOpen, setModalUpOpen] = useState(false);
  const [isModalInOpen, setModalInOpen] = useState(false);

    return (
        <div className={styles.main}>
            <div className={styles.imageside}>
                <img src="landingImage.jpg" alt="landing image"  />
            </div>
            <div className={styles.loginside}>
              
                  <img src="twitter-128.png" alt="logo" className={styles.logo} />
                  <h1 className={styles.h1}>See what's happening</h1>
                  <p className={styles.p1}>Join Hackatweet today.</p>


                  <button className={styles.signup} onClick={() => setModalUpOpen(true)}>
                    Sign Up
                  </button>
                  <SignUpModal isOpen={isModalUpOpen} onClose={() => setModalUpOpen(false)} />


                  <p className={styles.p2}>Already have an account?</p>


                  <button className={styles.signin} onClick={() => setModalInOpen(true)}>
                    Sign In
                  </button>
                  <SignInModal isOpen={isModalInOpen} onClose={() => setModalInOpen(false)} />

                </div>
            
        </div>
    );
}




export default Home;
