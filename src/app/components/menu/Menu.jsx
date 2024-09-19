import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
        
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John De</span>
              <span className={styles.date}> - 19.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
       
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John De</span>
              <span className={styles.date}> - 19.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
        
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John De</span>
              <span className={styles.date}> - 19.09.2024</span>
            </div>
          </div>
        </Link>
      </div>

      <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
      <Link href={'/blog?cat=style'}
       className={`${styles.categoryItem} ${styles.style}`}>
    Style
      </Link>
      </div>

      <h2 className={styles.subtitle}>{"Chosen by the editor"}</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John De</span>
              <span className={styles.date}> - 19.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John De</span>
              <span className={styles.date}> - 19.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John De</span>
              <span className={styles.date}> - 19.09.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
