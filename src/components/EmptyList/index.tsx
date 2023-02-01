import style from './index.module.css'
import { ClipboardText } from 'phosphor-react'
export function EmptyList() {
  return (
    <div className={style.emptyListContainer}>
      <ClipboardText className={style.clipBoard} />
      <div className={style.texts}>
        <span className={style.firstText}>
          Você ainda não tem tarefas cadastradas
        </span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
