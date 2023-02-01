import style from './index.module.css'
import { Trash } from 'phosphor-react'
export function Task() {
  return (
    <div className={style.taskContainer}>
      <div className={style.taskComponents}>
        <div className={style.customRadio}>
          <input id="radio-1" name="question" value="1" type="radio" />
          <label htmlFor="radio-1">
            Integer urna interdum massa libero auctor neque turpis turpis
            asdsadsa asdsadsa asdsadsda
          </label>
        </div>
        <Trash size={24} />
      </div>
    </div>
  )
}
