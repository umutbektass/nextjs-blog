'use client'
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
const AuthLinks = () => {
  const[open,setOpen]=useState(false)
  // const status = "notauthenticate"
  const {status} = useSession()
  console.log("status",status)
  return (
    <>
      {
        status =="unauthenticated" ? 
        <Link className={styles.link} href={"/login"}>Login</Link> : 
        <>
        <Link className={styles.link} href={"/write"}>Write</Link>
        <Link href={'/'} onClick={()=>signOut()}>
       <span className={styles.link}>Logout</span>
       </Link>
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
          {status=="unauthenticated" ? (
              <Link href={"/"}>Login</Link> ): 
              
             ( <>
        <Link href={"/write"}>Write</Link>
       <Link href={'/'} onClick={()=>signOut()}>
       <span className={styles.link}>Logout</span>
       </Link>
        </>)
          }
      
          </div>
        )
      }
    </>
  )
}

export default AuthLinks
