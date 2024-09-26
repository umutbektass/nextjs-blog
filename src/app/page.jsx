import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import Menu from "./components/menu/Menu";
import CardList from "./components/cardList/CardList";
import prisma from '@/app/utils/connect'
export default async function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1
  // try {
  //   const newPost = await prisma.post.create({
  //     data: {
  //       slug: "4",
  //       title: "4",
  //       desc: "4",
  //       img: "/p1.jpeg",
  //       views: 0,
  //       catSlug: "food",   // Category slug
  //       userEmail: "ubektassssssss.78@gmail.com"  // User email
  //     }
  //   });
  //   console.log("Post created:", newPost);
  // } catch (error) {
  //   console.log("Error creating post:", error);
  // }


  return <div className={styles.container}>
    <Featured/>
    <CategoryList />
    <div className={styles.content}>
    <CardList pageIndex={page}/>
    <Menu/>
    </div>
  </div>;
}
