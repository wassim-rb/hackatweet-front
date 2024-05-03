import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/tweets.module.css";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

function Tweet() {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState("");
  const [addNewDescription, setaddNewDescription] = useState("");
  const [dataTweet, setdataTweet] = useState([]);

  const token = useSelector((state) => state.user.value);
  const user = useSelector((state) => state.user.value);

/*const trends = [
    { hashtag: "#hackatweet", tweets: 2 },
    { hashtag: "#first", tweets: 1 },
    { hashtag: "#poww", tweets: 177 },
    { hashtag: "#feex", tweets: 3 },
    { hashtag: "#tranch", tweets: 47 },
    { hashtag: "#buisterdinette", tweets: 88 },
    { hashtag: "#huchhuch", tweets: 9 },
  ];*/

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
      <div key={i} className={styles.tweetPop}>
        <div className={styles.profil}>
          <img
            src="profile.png"
            alt="Profile"
            className={styles.logotweetPop}
          />
          @{token.username}
        </div>
        {/* <br /> */}
        <div className={styles.desc}>{elments.description}</div>
      </div>
    );
  });

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


// recupération hashtag pour panel à droite

const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweet/gethashtags")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setTrends(data.data.map(ht => ({ hashtag: ht._id, tweets: ht.count })));
        }
      });
  }, []);


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
              <p className={styles.firstname}>{user.firstname}</p>
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
            placeholder="What's up ?"
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
        <p className={styles.trends}>Trends</p>
        <div className={styles.hashtags}>
          {trends.map((trend, index) => (
            <p key={index} className={styles.trendItem}>
              {trend.hashtag} <br />
              <span className={styles.tweetCount}>{trend.tweets} Tweets</span>
              <div>
                <br />{" "}
              </div>
            </p>
          ))}
        </div>
      </div>

      



    </div>
  );
}

export default Tweet;
