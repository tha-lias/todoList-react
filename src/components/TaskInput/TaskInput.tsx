import { PlusCircle } from "@phosphor-icons/react";
import styles from "./TaskInput.module.css";
import { FormEvent, useState } from "react";

interface ITaskInput {
  onCreateTask: (descricao: string) => void;
}
export function TaskInput({ onCreateTask }: ITaskInput) {
  const [description, setDescription] = useState("");

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    if (description.trim()) {
      onCreateTask(description);
      setDescription("");
    }
  }
  return (
    <form className={styles.formTask} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">
        Criar <PlusCircle size={18} />
      </button>
    </form>
  );
}
