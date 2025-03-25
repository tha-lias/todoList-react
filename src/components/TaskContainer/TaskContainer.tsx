import { useState } from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskContainer.module.css";
import { ClipboardText } from "@phosphor-icons/react";

export interface ITask {
  id: number;
  description: string;
  completed: boolean;
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, description: "Estudar React", completed: false },
    { id: 2, description: "Estudar TypeScript", completed: true },
    { id: 3, description: "Estudar Angular", completed: false },
    // Add more tasks here...
  ]);

  function handleDeleteTask(taskId: number): void {
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
  }

  function handleTaskToggle(taskId: number): void {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const checkedTasksCount = tasks.reduce((count, task) => {
    if (task.completed) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p>
          Concluídas <span>{checkedTasksCount}</span>
        </p>
      </div>

      <div className={styles.listTasks}>
        {tasks.length === 0 ? (
          <div className={styles.noTasks}>
            <ClipboardText size={56} weight="light" />
            <div>
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div className={styles.task}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onToggleComplete={handleTaskToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
