import React from "react";
import { useState } from "react";
import styles from "../styles/tweets.module.css";

function Tweet() {
  const [counter, setCounter] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
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
