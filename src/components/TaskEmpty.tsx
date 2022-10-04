import { ClipboardText } from 'phosphor-react';

import styles from './TaskEmpty.module.css';



export function TaskEmpty() {
  return (
    <div className={styles.todoEmpty}>
      <ClipboardText size={56} weight="bold" />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}