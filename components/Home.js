import styles from '../styles/Home.module.css';

function Home() {
  return (
    // <div>
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>
    //   </main>
    // </div>
      <div className= {styles.main}>
      <h1>See what's happening</h1>
      <p>Join Hackatweet today.</p>
      <a href="https://nextjs.org">Sign Up</a>
      <a href="https://nextjs.org">Sign In</a>
    </div>
  );
}

export default Home;
