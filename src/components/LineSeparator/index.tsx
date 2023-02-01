import React from 'react'
import styles from './index.module.css'
export function LineSeparator() {
  return (
    <div className={styles.lineContainer}>
      <hr className={styles.line} />
    </div>
  )
}
