import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pragna</h1>
        <p className={styles.description}></p>
        <p className={styles.description}>
        Welcome to my Porfolio! I'm on a mission to refine user interfaces and make them both visually appealing
        and easy to use.
        </p>
        <p className={styles.description}>
        I thoroughly enjoy designing responsive interfaces; 
        they transport me to another world, igniting my curiosity and driving me to constantly seek 
        out new knowledge.
        </p>
        <p className={styles.description}> 
        Come explore my portfolio and see how I blend technical skills with a passion for user-friendly design.
        </p>
        <p className={styles.description}></p>
        <a href="mailto:kotamrajupragna@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
