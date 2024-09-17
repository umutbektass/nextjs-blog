'use client'
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
const AuthLinks = () => {
  const[open,setOpen]=useState(false)
  const status = "notauthenticate"
  return (
    <>
      {
        status =="notauthenticate" ? 
        <Link className={styles.link} href={"/"}>Login</Link> : 
        <>
        <Link className={styles.link} href={"/write"}>Write</Link>
        <span className={styles.link}>Logout</span>
        </>
      }
      <div className={styles.burger} onClick={()=>setOpen(currentOpen=>!currentOpen)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {
        open && (
          <div className={styles.responsiveMenu}>
            <Link href={'/'}>Homepage</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Contact</Link>
          {status=="notauthenticate" ? (
              <Link href={"/"}>Login</Link> ): 
              
             ( <>
        <Link href={"/write"}>Write</Link>
        <span className={styles.link}>Logout</span>
        </>)
          }
      
          </div>
        )
      }
    </>
  )
}

export default AuthLinks
