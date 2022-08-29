/* eslint-disable react/no-unescaped-entities */
import styles from './Banner.module.css';
import Image from 'next/image';
import group from "../../assets/images/Group.png";
import Button from '../Button';

export default function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.insertMail}>
        <div className={styles.headlines}>
          <h1>Hi, I'm
          <br></br>
          Front-End Dev</h1>
          <h2>On this blog I share tips and tricks, frameworks, projects,
          <br></br>
          tutorials, etc</h2>
        </div>
        <div className={styles.mailForm}>
          <input type='email' placeholder='Enter your email here....'></input>
          <Button title='Subscribe'/>
        </div>
      </div>
      <div className={styles.imageGroup}>
        <Image src={group} alt='man handling web browsers'/>
      </div>
    </div>
  )
}

