import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
    <Image className={styles.image} src="/p1.jpeg" alt='' fill/>
      </div>
      <div className={styles.textContainer}>
    <div className={styles.detail}>
    <span className={styles.date}>19.09.2024 - </span>
    <span className={styles.category}>Culture</span>
    </div>
    <Link href={'/'}>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    </Link>
    <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Fugit libero, repellendus odio voluptatibus quam natus cumque 
         nihil, ut eius facilis, corporis voluptatum atque sunt deserunt?...
    </p>
    <Link className={styles.link} href={'/'}>Read More</Link>
      </div>
    </div>
  )
}

export default Card
