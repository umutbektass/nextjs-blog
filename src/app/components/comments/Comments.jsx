'use client'
import React, { useEffect, useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr"
import prisma from "@/app/utils/connect";

const fetcher = async(url)=>{ const res = await fetch(url);
  const data = await res.json();
    if(!res.ok){
      const error = new Error(data.error)
      throw error;
    }
    return data;
}


const Comments = ({postSlug}) => {
  const {status} = useSession();
  const {data,mutate,error,isLoading} = useSWR(`${process.env.API_URL}/api/comments?postSlug=${postSlug}`,fetcher)
  console.log("data", data)
  const [desc,setDesc] = useState("")

  const handleClick = async()=>{
   const res = await fetch(`${process.env.API_URL}/api/comments`,{
    method:'POST',body:JSON.stringify({desc,postSlug})
   })
   if(!res.ok){
    throw new Error("Something went wrong!")
   }
   mutate()
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status == "authenticated" ? (
        <div className={styles.write}>
         <textarea placeholder="write a comment..." className={styles.input} rows="3" onChange={(e)=>setDesc(e.target.value)} />
         <button className={styles.button} onClick={handleClick}>Submit</button>
        </div>
      ) : (
        <Link href={"/login"}>Login to write a comment</Link>
      )}
    {
     data && data.map(item=>(
      <div className={styles.comments} key={item.id}>
      {
        isLoading ? "Loading" : <div className={styles.comment}>
        <div className={styles.user}>
       <Image
            src={item.user.image ?item.user.image : "/non-user.jpg" }
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.userName}>{item.user.name}</span>
            <span className={styles.date}>{item.createdAt.substring(0,10)}</span>
          </div>
        </div>
        <p className={styles.desc}>
        {item.desc}
        </p>
      </div>
      }
      
    </div>
     ))
    }
       
    
    </div>
  );
};

export default Comments;
