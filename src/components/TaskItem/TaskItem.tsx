import { Check, Trash } from "@phosphor-icons/react";
import styles from "./TaskItem.module.css";
import { ITask } from "../TaskContainer/TaskContainer";

export interface ITaskItem {
  task: ITask;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export function TaskItem({ task, onDelete, onToggleComplete }: ITaskItem) {
  return (
    <div className={styles.task}>
      <div
        className={styles.infoTask}
        onClick={() => onToggleComplete(task.id)}
      >
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span
            className={`${styles.checkbox} ${
              task.completed
                ? styles["checkbox-checked"]
                : styles["checkbox-unchecked"]
            }`}
          >
            {task.completed && <Check size={12} color="white" />}
          </span>
        </label>
        <p
          className={`${styles.paragraph} ${
            task.completed && styles["paragraph-checked"]
          }`}
        >
          {task.description}
        </p>
      </div>
      <button onClick={() => onDelete(task.id)}>
        <Trash size={18} color="#808080" />
      </button>
    </div>
  );
}
