import { PlusCircle } from "@phosphor-icons/react";
import styles from "./TaskInput.module.css";

function handleCreateTask() {
  event?.preventDefault();
}

export function TaskInput() {
  return (
    <form className={styles.formTask} onSubmit={handleCreateTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={18} />
      </button>
    </form>
  );
}
