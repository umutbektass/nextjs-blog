'use client'
import React from 'react'
import styles from './loginPage.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const LoginPage = () => {
  const router = useRouter()
  const {data,status} = useSession()
  console.log("data",data)
  console.log("status",status)

  if(status=="loading"){
    return <div>Loading..</div>
  }
  if(status=="authenticated"){
    return router.push("/")
  }
    return (
      <div className={styles.container}>
       <div className={styles.wrapper}>
          <div className={styles.socialButton} onClick={()=>signIn("google",{redirect:false})}>Sign in with Google</div>
          <div className={styles.socialButton}>Sign in with Github</div>
          <div className={styles.socialButton}>Sign in with Facebook</div>
       </div>
      </div>
    )
}

export default LoginPage
