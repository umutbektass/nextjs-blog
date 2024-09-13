import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import Menu from "./components/menu/Menu";
import CardList from "./components/cardList/CardList";


export default function Home() {
  return <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
    <CardList/>
    <Menu/>
    </div>
  </div>;
}
