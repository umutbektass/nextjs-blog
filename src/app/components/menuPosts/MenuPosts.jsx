import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";
import Link from "next/link";
const MenuPosts = ({ widthImage }) => {
  return (
    <div className={styles.items}>
      <Link href={"/"} className={styles.item}>
        {widthImage && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
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
        {widthImage && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}

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
        {widthImage && (
          <div className={styles.imgContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill />
          </div>
        )}

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
  );
};

export default MenuPosts;
