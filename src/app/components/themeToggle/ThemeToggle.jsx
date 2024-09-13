'use client'
import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/app/context/ThemeContext'
const ThemeToggle = () => {
  const {theme} = useContext(ThemeContext)
  console.log(theme)


  return (
    <div className={styles.container}>
      <Image src={'/moon.png'} alt='moon' width={18} height={18} />
      <div className={styles.ball}></div>
      <Image src={'/sun.png'} alt='sun' width={24} height={24} />
    </div>
  )
}

export default ThemeToggle
