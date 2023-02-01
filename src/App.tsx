import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { TasksInfo } from './components/TasksInfo'
import { LineSeparator } from './components/LineSeparator'
import { EmptyList } from './components/EmptyList'
import { Task } from './components/Task'
function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>
        <SearchBar />
        <TasksInfo />
        <LineSeparator />
        <EmptyList />
        <Task />
      </div>
    </div>
  )
}

export default App
