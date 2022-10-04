import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { TaskEmpty } from './TaskEmpty';
import { TaskHeader } from './TaskHeader';
import { Task } from './Task';

import styles from './NewTask.module.css';

export interface Task {
  id: number
  content: string;
  completed: boolean;
}

export function NewTask() {
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState(Array<Task>);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const id = (tasks.at(-1)?.id || tasks.length ) + 1;
    setTasks((state) => [...state, { id, content: newTaskText, completed: false } ]);

    setNewTaskText('');
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Digite uma tarefa!');
  }

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeleteOne = tasks.filter(task => task.id !== taskToDelete);

    setTasks(tasksWithoutDeleteOne);
  }

  function completedTask(taskId: number, checked: boolean) {
    const taskCompleted = tasks.map(task => {
      if(task.id === taskId) return { ...task, completed: checked }
      return task;
    });

    setTasks(taskCompleted);
  }

  const isTaskListEmpty = tasks.length === 0;
  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.reduce((
    (previousValue, currentValue) => currentValue.completed ? previousValue+= 1 : previousValue), 0);

  const isNewTaskListEmpty = newTaskText.length === 0;

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.inputContainer}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskTextChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" disabled={isNewTaskListEmpty}>
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.taskList}>
        <div className={styles.task}>
          <TaskHeader totalTasksCreated={totalTasksCreated} totalTasksCompleted={totalTasksCompleted} />
          {isTaskListEmpty ? (
            <TaskEmpty />
          ) : (
            tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                completed={task.completed}
                onCompletedTask={completedTask}
                onDeleteTask={deleteTask}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}