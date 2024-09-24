"use client";
import React, { useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSession } from "next-auth/react";


const WritePage = () => {
  const [value, setValue] = useState("");
    const {data,status} = useSession();
  return (
    <div className={styles.container}>
      <ReactQuill  value={value} onChange={setValue} placeholder="Tell your story..."/>
    </div>
  );
};

export default WritePage;
