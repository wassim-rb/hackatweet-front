import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/tweets.module.css";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import TweetPop from "./TweetPop";

function Tweet() {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState("");
  const [addNewDescription, setaddNewDescription] = useState("");
  const [dataTweet, setdataTweet] = useState([]);

  const token = useSelector((state) => state.user.value);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    fetch("http://localhost:3000/tweet/gettweets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        if (data.result.length > 0) {
          return setdataTweet(data.result);
        } else {
          return { result: false };
        }
      });
  }, [addNewDescription]);

  const allTweet = dataTweet.map((elments, i) => {
    return (
      // <TweetPop key={i} />
      <div key={i} className={styles.tweetPop}>
        {token.username}
        {elments.description}
      </div>
    );
  });
  // dataTweet.map((elments, i) => {
  //   return
  // })

  const handleLogout = () => {
    dispatch(logout());
    location.assign("/home");
  };

  const handleClick = () => {
    console.log(addNewDescription);
    fetch("http://localhost:3000/tweet/tweetUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token.token,
        description: addNewDescription,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
            onChange={(e) => {
              setaddNewDescription(e.target.value);
              setCounter(e.target.value);
            }}
            placeholder="Enter Details..."
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
          <div>{allTweet}</div>
        </div>
      </div>
      <div className={styles.right}>
        <p>oiseau</p>
      </div>
    </div>
  );
}

export default Tweet;
