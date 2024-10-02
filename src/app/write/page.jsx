"use client";
import React, { useEffect, useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GoPlusCircle } from "react-icons/go";
import { FaRegImages } from "react-icons/fa";
import { PiImageSquareLight } from "react-icons/pi";

const toolbarOptions = [
  [{ header: "1" }, { header: "2" }, { font: [] }],
  [{ size: [] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["link", "image", "video"],
  ["clean"], // remove formatting button
];

const WritePage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data, status } = useSession();
  if (status == "loading") return <div>Loadinng...</div>;
  if (status == "unauthenticated") return router.push("/");

  return (
    <div className={styles.container}>
      {/* <ReactQuill  modules={{ toolbar: toolbarOptions }}  value={value} onChange={(e)=>console.log(e)} placeholder="Tell your story..."/> */}
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(prev=> !prev)} id={styles.openBtn}>
        <GoPlusCircle size={100} color="grey" />
        </button>
        {
          open && (
            <div className={styles.add}>
              <button className={styles.addButton}>
              <FaRegImages size={20}  color="grey" />
              </button>
              <button className={styles.addButton}>
              <FaRegImages size={20}  color="grey" />
              </button>
              <button className={styles.addButton}>
              <FaRegImages size={20}  color="grey" />
              </button>
              </div>
          )
        }
      <ReactQuill theme="bubble" placeholder="Tell your story..." />

      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
