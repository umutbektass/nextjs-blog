import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {
  return (
    <nav className={styles.container}>
     <div className={styles.socials}>
    <Image src={'/facebook.png'} alt='facebook' width={24} height={24}/>
    <Image src={'/instagram.png'} alt='instagram' width={24} height={24}/>
    <Image src={'/youtube.png'} alt='youtube' width={24} height={24}/>
    <Image src={'/tiktok.png'} alt='tiktok' width={24} height={24}/>
     </div>
     <Link href={'/'} className={styles.logo} >BLOG-APP</Link>
     <div className={styles.links}>
      <ThemeToggle/>
    <Link href={'/'} className={styles.link} >Homepage</Link>
    <Link href={'/'} className={styles.link}>Contact</Link>
    <Link href={'/'} className={styles.link}>About</Link>
    <AuthLinks/>
    </div>
    </nav>
  )
}

export default Navbar
