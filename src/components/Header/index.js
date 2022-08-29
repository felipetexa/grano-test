import Button from '../Button';
import logo from "../../assets/images/Logo.png";
import magnifier from "../../assets/images/Icon.png";
import Image from 'next/image';
import styles from './Header.module.css';
import {useState, useEffect, useRef } from 'react';

export default function Header() {

  const dropDownRef = useRef(null)

  const useOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
      const onClick = e => {
        if(el.current !== null && !el.current.contains(e.target)){
          setIsActive(!isActive);
        }

        if(isActive){
          window.addEventListener('click', onClick);
        }

        return () =>{
          window.removeEventListener('click', onClick);
        }
      }
      }, [isActive, el])

    return [isActive, setIsActive]
    
  }

  const [isActive, setIsActive] = useOutsideClick(dropDownRef, false)
  const onClick = () => setIsActive(!isActive)

  return(
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo"/>
      </div>
      <div className={styles.menuContainer}>
        <nav ref={dropDownRef} className={`menu ${isActive} ? "active" : "inactive"`}>
          <button id={styles.btnMobile} onClick={onClick}>Menu
          </button>
        <ul className={styles.option}>
          <li>Home</li>
          <li>Category</li>
          <li><Image src={magnifier} alt="search magnifier" />Search</li>
          <Button title='Contact'/>
        </ul>
        </nav>
      </div>
    </div>
  )
}