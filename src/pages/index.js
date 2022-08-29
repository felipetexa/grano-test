import Header from "../components/Header";
import Banner from "../components/Banner";
import CategoryBrowse from "../components/CategoryBrowse";
import Cards from "../components/Cards";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CategoryBrowse />
      <Cards />
    </div>
  )
}
