import { ClipboardText } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.info}>
        <p className={styles.created}>Tarefas criadas <span>0</span></p>
        <p className={styles.done}>Concluídas <span>0</span></p>
      </div>

      <div className={styles.todoEmpty}>
        <ClipboardText size={56} weight="bold" />
        <p>
          Você ainda não tem tarefas cadastradas
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </div>
    </div>
  )
}