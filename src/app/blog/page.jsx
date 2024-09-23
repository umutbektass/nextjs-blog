import React from 'react'
import styles from './blogPage.module.css'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'
const BlogPage = ({searchParams}) => {
    const category = searchParams.cat
    console.log("category",category)
  return (
    <div className={styles.container}>
     <h1 className={styles.title}> BlogPage</h1>
     <div className={styles.content}>
    <CardList/>
    <Menu/>
     </div>
    </div>
  )
}

export default BlogPage
