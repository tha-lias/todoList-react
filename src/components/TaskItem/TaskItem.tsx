import styles from "./TaskItem.module.css";

export function TaskItem() {
  return (
    <div className={styles.task}>
      <div className={styles.infoTask}>
          <input type="checkbox" name="" id="" />
          <p>Estudar React</p>
      </div>
      <button>delete</button>
    </div>
  );
}
