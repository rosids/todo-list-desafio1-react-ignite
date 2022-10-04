import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

import { Task as TaskP } from './NewTask';

interface TaskProps extends TaskP {
  onDeleteTask: (task: number) => void;
}

export function Task({ id, content, onDeleteTask }: TaskProps) {
  function handleDeleteTask () {
    onDeleteTask(id);
  }

  return (
    <div className={styles.taskList}>
      <input type="checkbox" />
      <p>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}