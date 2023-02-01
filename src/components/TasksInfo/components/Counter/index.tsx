import styles from './index.module.css'
export function Counter() {
  return (
    <div className={styles.counterContainer}>
      <span className={styles.counterComponent}>0</span>
    </div>
  )
}
