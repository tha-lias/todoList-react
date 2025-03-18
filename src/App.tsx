import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { TaskContainer } from './components/TaskContainer/TaskContainer';
import { TaskInput } from "./components/TaskInput/TaskInput";

function App() {

  return (
    <>
      <Header />
      <TaskInput />

      <div className={styles.wrapper}>
        <TaskContainer />
      </div>
    </>
  );
}

export default App
