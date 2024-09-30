'use client'
import React, { useEffect } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr"
import prisma from "@/app/utils/connect";

const fetcher = (url)=>{ fetch(url).then((res)=>res.json()) }

const Comments = ({postSlug}) => {
  const {status} = useSession();
  const {data,error,isLoading} = useSWR(`${process.env.API_URL}/api/comments/${postSlug}`,fetcher)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status == "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} rows="3" />
          <button className={styles.button}>Submit</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {
          isLoading ? "Loading" : <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sit vitae unde et beatae, id eum praesentium fugit sint perferendis
            labore placeat, voluptatibus in iure. Numquam, et itaque similique
            tempora tenetur doloribus reiciendis voluptates aspernatur magnam,
            dolorem voluptatum corrupti quis sed error commodi! Eligendi,
            eveniet. Ratione ea alias perspiciatis.
          </p>
        </div>
        }
        
      </div>
    </div>
  );
};

export default Comments;
