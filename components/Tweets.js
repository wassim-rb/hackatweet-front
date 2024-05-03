import React from "react";
import { useState } from "react";
import styles from "../styles/tweets.module.css";

function Tweet() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.middle}>
        <div className={styles.headerMiddle}>
          <p>HOME</p>
          <textarea
            className={styles.textarea}
            type="text"
            name="description"
            size="280"
            required
            class="input"
            placeholder="Enter the new post"
          />
          {/* <input className={styles.texttweet} type="text" /> */}
        </div>
      </div>
      <div className={styles.right}>
        <p>oiseau</p>
      </div>
    </div>
  );
}

export default Tweet;
