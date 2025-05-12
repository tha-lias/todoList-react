import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskContainer.module.css";
import { ClipboardText } from "@phosphor-icons/react";

export interface ITask {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskContainerProps {
  tasks: ITask[];
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export function TaskContainer({ tasks, onDeleteTask, onToggleTask }: TaskContainerProps) {
  const checkedTasksCount = tasks.filter(task => task.completed).length;

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
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div className={styles.task}>
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={() => onDeleteTask(task.id)}
                onToggleComplete={() => onToggleTask(task.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}