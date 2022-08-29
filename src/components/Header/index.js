import Button from '../Button';
import logo from "../../assets/images/Logo.png";
import magnifier from "../../assets/images/Icon.png";
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return(
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo"/>
      </div>
      <div className={styles.option}>
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li><Image src={magnifier} alt="search magnifier" />Search</li>
        </ul>
        <Button title='Contact'/>
      </div>
    </div>
  )
}