import Button from '../Button';
import styles from './Category.module.css'

export default function CategoryBrowse() {
  return (
    <div className={styles.wrapper}>
      <h1>Browse The Category</h1>
      <div className={styles.categoryButtons}>
        <Button title="Categoria 1"/>
        <Button title="Categoria 2"/>
        <Button title="Categoria 3"/>
        <Button title="Categoria 4"/>
      </div>
    </div>
  )
}