import { PlusCircle } from 'phosphor-react';

import { TaskEmpty } from './TaskEmpty';
import { TaskHeader } from './TaskHeader';

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <>
      <form className={styles.inputContainer}>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <div className={styles.taskList}>
        <div className={styles.task}>
          <TaskHeader />
          <TaskEmpty />
        </div>
      </div>
    </>
  )
}