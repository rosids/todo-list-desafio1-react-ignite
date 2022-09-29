import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
  return (
    <form className={styles.inputContainer}>
      <input placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}