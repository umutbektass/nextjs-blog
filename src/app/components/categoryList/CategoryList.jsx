import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href={"/blog"} className={`${styles.category} ${styles.style}`}>
          <Image className={styles.image} width={32} height={32} src="/style.png" alt="" />
          Style
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.fashion}`}>
          <Image className={styles.image} width={32} height={32} src="/fashion.png" alt="" />
          Fashion
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.food}`}>
          <Image className={styles.image} width={32} height={32} src="/food.png" alt="" />
          Food
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.travel}`}>
          <Image className={styles.image} width={32} height={32} src="/travel.png" alt="" />
          Travel
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.culture}`}>
          <Image className={styles.image} width={32} height={32} src="/culture.png" alt="" />
          Culture
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.coding}`}>
          <Image className={styles.image} width={32} height={32} src="/coding.png" alt="" />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
