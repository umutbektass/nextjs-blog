import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../../components/menu/Menu";
import Image from "next/image";
import Comments from "../../components/comments/Comments";

const getData = async(slug)=>{
  const res = fetch(`${process.env.API_URL}/api/posts/${slug}`,{
    cache:"no-store"
  })
  if(!res.ok){
   throw new Error("Error")
  }
  return res.json()
}

const SinglePage = async({ params }) => {
  const {slug} = params
  const data = await getData(slug)
  console.log("data",data)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates et ratione doloremque pariatur deleniti, repellendus
              laboriosam. Aliquam quo expedita voluptate quas architecto
              accusamus pariatur sed excepturi perspiciatis! Iusto nihil
              pariatur fugiat officia.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates et ratione doloremque pariatur deleniti, repellendus
              laboriosam. Aliquam quo expedita voluptate quas architecto
              accusamus pariatur sed excepturi perspiciatis! Iusto nihil
              pariatur fugiat officia.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates et ratione doloremque pariatur deleniti, repellendus
              laboriosam. Aliquam quo expedita voluptate quas architecto
              accusamus pariatur sed excepturi perspiciatis! Iusto nihil
              pariatur fugiat officia.
            </p>
          </div>
          <div className={styles.comments}>
      <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
