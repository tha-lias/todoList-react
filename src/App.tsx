import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { TaskContainer } from './components/TaskContainer/TaskContainer';
import { TaskInput } from './components/TaskInput/TaskInput';

export interface ITask {
  id: number;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, description: "Estudar React", completed: false },
    { id: 2, description: "Estudar TypeScript", completed: true },
    { id: 3, description: "Estudar Angular", completed: false },
  ]);

  const handleCreateTask = (description: string) => {
    const newTask: ITask = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleTaskToggle = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
      <Header />
      <TaskInput onCreateTask={handleCreateTask} />
      
      <div className={styles.wrapper}>
        <TaskContainer
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleTask={handleTaskToggle}
        />
      </div>
    </>
  );
}

export default App;