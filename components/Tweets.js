import React from "react";
import { useState } from "react";
import styles from "../styles/tweets.module.css";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";

function Tweet() {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState("");
  const [addNewDescription, setaddNewDescription] = useState("");

  const token = useSelector((state) => state.user.value);
  const user = useSelector((state) => state.user.value);

  const handleLogout = () => {
    dispatch(logout());
    location.assign("/home");
  };

  const handleClick = () => {
    console.log("click post");
    fetch("http://localhost:3000/tweet/tweetUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token,
        description: addNewDescription,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setaddNewDescription("");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.profile}>
          <img src="twitter-64.png" alt="Profile" className={styles.logo} />
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.userDetails}>
            <img src="profile.png" alt="John" className={styles.avatar} />
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
          <p className={styles.homeheader}>HOME</p>
          <textarea
            className={styles.textarea}
            // type="textarea"
            cols="45"
            maxLength="280"
            onChange={(e) => setCounter(e.target.value)}
            value={counter}
          />
          <div className={styles.counteretBouton}>
            <div className={styles.counter}>{counter.length}/280</div>
            <button
              className={styles.boutonTweet}
              onClick={() => handleClick()}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <p>oiseau</p>
      </div>
    </div>
  );
}

export default Tweet;
