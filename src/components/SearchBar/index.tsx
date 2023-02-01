import styles from './index.module.css'
import { PlusCircle } from 'phosphor-react'

export function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <input
        placeholder="Adicione uma nova tarefa"
        className={styles.searchInput}
        type="text"
        name=""
        id=""
      />
      <button className={styles.searchButton}>
        Criar <PlusCircle />
      </button>
    </div>
  )
}
