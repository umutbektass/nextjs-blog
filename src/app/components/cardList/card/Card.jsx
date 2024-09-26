import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = ({key,item}) => {

  const formatCreationDate = ()=>{
      const newDate = new Date(item.createdAt)
      return newDate.toLocaleDateString()
  }
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imgContainer}>
    <Image className={styles.image} src={item.img || "/p1.jpeg" }  alt='' fill/>
      </div>
      <div className={styles.textContainer}>
    <div className={styles.detail}>
    <span className={styles.date}>{formatCreationDate()} - </span>
    <span className={styles.category}>{item.catSlug}</span>
    </div>
    <Link href={'/'}>
    <h1>{item.title}</h1>
    </Link>
    <p className={styles.desc}>
       {item.desc}
    </p>
    <Link className={styles.link} href={'/'}>Read More</Link>
      </div>
    </div>
  )
}

export default Card
