import React from 'react'
import styles from './cardlList.module.css'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from './card/Card'



const getData = async()=>{
  const res = await fetch(`${process.env.API_URL}/api/posts?page=2`,{
    cache:'no-store'
  })
  if(!res){
    throw new Error("Failed")
  }
  return res.json();
}




const CardList = async() => {
  // const data = await getData()
  const data = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div> 
      <Pagination/>
    </div>
  )
}

export default CardList
