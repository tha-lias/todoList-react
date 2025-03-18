import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskContainer.module.css";
import { ClipboardText } from "@phosphor-icons/react";

export function TaskContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Tarefas criadas <span>10</span>
        </p>
        <p>
          Concluídas <span>2</span>
        </p>
      </div>

      <div className={styles.listTasks}>
        {/* <div className={styles.noTasks}>
          <ClipboardText size={56} weight="light" />
          <div>
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div> */}

        <div className={styles.task}>
          <TaskItem />
        </div>
      </div>
    </div>
  );
}
