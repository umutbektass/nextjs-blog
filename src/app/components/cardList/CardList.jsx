import React from 'react'
import styles from './cardlList.module.css'
import Pagination from '../pagination/Pagination'
import Card from './card/Card'



const getData = async(pageIndex)=>{
  const res = await fetch(`${process.env.API_URL}/api/posts?page=${pageIndex}`,{
    cache:'no-store'
  })
  if(!res){
    throw new Error("Failed")
  }
  return res.json();
}




const CardList = async({pageIndex}) => {
  const {posts,count} = await getData(pageIndex)
  const POST_PER_PAGE=2
  const hasPrev = POST_PER_PAGE * (pageIndex - 1)>0
  const hasNext = POST_PER_PAGE * (pageIndex  - 1) + POST_PER_PAGE < count
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
     {
   posts?.map(item=>(
        <Card
        key={item.id}
        item={item}
        />
      ))
     }
      </div> 
      <Pagination pageIndex={pageIndex} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList
