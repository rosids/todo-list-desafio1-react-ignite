import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

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
    <div className={styles.task}>
      <Checkbox.Root
        className={styles.unchecked}
      >
        <Checkbox.Indicator>
          <Check size={12} weight="bold" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>{content}</p>
      <button className={styles.delete} onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}