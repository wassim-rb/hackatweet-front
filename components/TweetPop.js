import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/tweets.module.css";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
function TweetPop() {
  return (
    <div key={i} className={styles.tweetPop}>
      {token.username}
      {elments.description}
    </div>
  );
}
export default TweetPop;
