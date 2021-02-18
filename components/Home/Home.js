import React from "react";
import styles from "./Home.module.scss";
import Button from "../Layout/Button/Button";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to <span className={styles.logo}>My Recipes</span></h1>
        <p className={styles.description}>
          Create your own secret recipes book online.
        </p>
        <Button path="/new-recipe" text="Start now" size="lg"/>
      </main>
    </div>
  );
}

export default Home;
