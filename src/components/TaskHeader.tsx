import styles from './TaskHeader.module.css';

interface TaskHeaderProps {
  totalTasksCreated: number;
  totalTasksCompleted: number;
}

export function TaskHeader({ totalTasksCreated, totalTasksCompleted }: TaskHeaderProps) {
  return (
    <div className={styles.info}>
      <p className={styles.created}>Tarefas criadas <span>{totalTasksCreated}</span></p>
      <p className={styles.done}>
        Concluídas
        <span>
          {totalTasksCompleted === 0 ? totalTasksCompleted : `${totalTasksCompleted} de ${totalTasksCreated}`}
        </span>
      </p>
    </div>
  );
}