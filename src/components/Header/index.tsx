import styles from './index.module.css'
import headerLogo from '../../assets/Logo.png'
export function Header() {
  return (
    <header className={styles.header}>
      <img src={headerLogo} />
    </header>
  )
}
