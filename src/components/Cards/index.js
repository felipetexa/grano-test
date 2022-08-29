import styles from './Cards.module.css';
import Image from 'next/image';
import tempCard from "../../assets/images/temp-card.png";
import { useState, useEffect } from 'react';

export default function Cards() {

  const URL_API = 'https://testewp.granostudio.com.br/';

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchAllData = async () => {
    try{
      setLoading(true);
      const response = await fetch(URL_API);
      const data = await response.json();

      if(!data) throw 'Requisition problem';
      setData(data);
    }
    catch (error){
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [])
  

  return (
    <div className={styles.wrapper}>
        {loading && !data && 
      <p>Carregando informações</p>
        }
        {data && data.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image src={item.image} alt=""/>
            <h3>{item.title}</h3>
            <h6>{item.category}</h6>
            <p>{item.date}</p>
          </div>
    ))}
      <div className={styles.card}>
        <Image src={tempCard} alt=""/>
        <h3>Fundamental Of Javascript</h3>
        <h6>Categoria 1</h6>
        <p>Jan 10, 2022</p>
      </div>
      <div className={styles.card}>
        <Image src={tempCard} alt=""/>
        <h3>Fundamental Of Javascript</h3>
        <h6>Categoria 1</h6>
        <p>Jan 10, 2022</p>
      </div>
    </div>
  )
}
