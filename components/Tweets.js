import React from "react";
import { useState } from "react";
import styles from "../styles/tweets.module.css";
import { logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

function Tweet() {
  const [counter, setCounter] = useState("");

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

   const handleLogout = () => {
    dispatch(logout());
    location.assign('/home');
  };
  console.log(user)

  return (
    <div className={styles.container}>

      <div className={styles.left}>

        <div className={styles.profile}>
            <img src="twitter-64.png" alt="Profile" className={styles.logo} />
        </div>

        <div className={styles.bottomSection}>
            <div className={styles.userDetails}>
                <img src='profile.png' alt="John" className={styles.avatar} />
                <div>
                    <p className={styles.firstname}> john {user.firstname}</p>
                    <p className={styles.username}>@{user.username}</p>
                </div>
            </div>
            <button className={styles.logoutButton} onClick={handleLogout}>
                Logout
            </button>
        </div>

      </div>

      <div className={styles.middle}>
        <div className={styles.headerMiddle}>
          <p>HOME</p>
          {/* <textarea
            className={styles.textarea}
            type="text"
            name="description"
            size="280"
            required
            //class="input"
            placeholder="Enter the new post"
          /> */}
          <input
            className={styles.textarea}
            type="textarea"
            maxlength="280"
            onChange={(e) => setCounter(e.target.value)}
            value={counter}
          />
          {counter.length}
        </div>
      </div>
      <div className={styles.right}>
        <p>oiseau</p>
      </div>
    </div>
  );
}

export default Tweet;
