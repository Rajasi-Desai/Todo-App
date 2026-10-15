import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskControls from "./components/TaskControls/TaskControls";
import TaskList from "./components/TaskList/TaskList";
import "./App.css"
import { getStoredTasks, updateLocalStorage } from "./utils/localStorageUtils";

const App = () => {
  const [tasks, setTasks] = useState(getStoredTasks);

  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  const sortTasks = () => {
    const sortedTasks = [...tasks]
      .sort((a,b) => (a.priority - b.priority));

    setTasks(sortedTasks);
    updateLocalStorage(sortedTasks);
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? {...task, done: !task.done} : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const updateTask = ({ taskId, editText, editPriority }) => {
    const updatedTasks = tasks.map((task) => (
      task.id === taskId ? 
      {...task, text:editText, priority:editPriority} :
      task
    ));
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>To Do List</h2>
      <TaskForm addTask={addTask} />
      <TaskControls 
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />
      <TaskList 
        tasks={tasks} 
        showOnlyIncomplete={showOnlyIncomplete}
        toggleTaskDone={toggleTaskDone}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  )
}

export default App
