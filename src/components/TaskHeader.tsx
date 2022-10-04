import styles from './TaskHeader.module.css';

export function TaskHeader() {
  return (
    <div className={styles.info}>
      <p className={styles.created}>Tarefas criadas <span>0</span></p>
      <p className={styles.done}>Concluídas <span>0</span></p>
    </div>
  );
}