import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";


const getData = async()=>{
  const res = await fetch(`${process.env.API_URL}/api/categories`,{
    cache:'no-store'
  })
  if(!res){
    throw new Error("Failed")
  }
  return res.json()
}


const CategoryList = async() => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
       {
       data.map(item=>(
        <Link key={item.slug} href={item.slug} className={`${styles.category} ${styles[item.slug]}`}>
        {item.img &&  <Image className={styles.image} width={32} height={32} src={item.img} alt="" />}
         {item.title}
       </Link>
       ))  
       }
    
      </div>
    </div>
  );
};

export default CategoryList;
