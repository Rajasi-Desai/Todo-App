import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskControls from "./components/TaskControls/TaskControls";
import TaskList from "./components/TaskList/TaskList";
import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy groceries",
      priority: 1,
      done: true,
    },
    {
      id: 2,
      text: "Have a walk",
      priority: 2,
      done: false,
    },
    {
      id: 3,
      text: "Read a book",
      priority: 3,
      done: false,
    },
  ]);

  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  const sortTasks = () => {
    const sortedTasks = [...tasks]
      .sort((a,b) => (a.priority - b.priority));

    setTasks(sortedTasks);
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? {...task, done: !task.done} : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = ({ taskId, editText, editPriority }) => {
    const updatedTasks = tasks.map((task) => (
      task.id === taskId ? 
      {...task, text:editText, priority:editPriority} :
      task
    ));
    setTasks(updatedTasks);
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
