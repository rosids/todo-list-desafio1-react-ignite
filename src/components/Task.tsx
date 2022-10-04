import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

import { Task as TaskProp } from './NewTask';

interface TaskProps extends TaskProp {
  onDeleteTask: (task: number) => void;
  onCompletedTask: (id: number, checked: boolean) => void;
}

export function Task({ id, content, completed, onDeleteTask, onCompletedTask }: TaskProps) {
  function handleDeleteTask () {
    onDeleteTask(id);
  }

  function handleTaskCompleteChange(checked: boolean) {
    onCompletedTask(id, checked === true ? true : false);
  }

  return (
    <div className={completed ? styles.taskCompleted : styles.task}>
      <Checkbox.Root
        className={completed ? styles.checked : styles.unchecked}
        checked={completed}
        onCheckedChange={handleTaskCompleteChange}
      >
        <Checkbox.Indicator>
          <Check weight="bold" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>{content}</p>
      <button className={styles.delete} onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}