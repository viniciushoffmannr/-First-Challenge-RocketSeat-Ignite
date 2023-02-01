import styles from './index.module.css'
import { Counter } from './components/Counter'
export function TasksInfo() {
  return (
    <div className={styles.tasksInfoContainer}>
      <div className={styles.tasksInfoComponents}>
        <div className={styles.tasksInfoTasksContainer}>
          <span id={styles.tasksInfoCreatedTasksText}>Tarefas criadas</span>
          <Counter />
        </div>

        <div className={styles.tasksInfoTasksContainer}>
          <span id={styles.tasksInfoCompletedTasksText}>Concluidas</span>
          <Counter />
        </div>
      </div>
    </div>
  )
}
