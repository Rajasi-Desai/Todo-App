import { useReducer, useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskControls from "./components/TaskControls/TaskControls";
import TaskList from "./components/TaskList/TaskList";
import "./App.css"
import { getStoredTasks } from "./utils/localStorageUtils";
import { taskReducer } from "./reducers/taskReducers";

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks());

  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  const addTask = (newTask) => {
    dispatch({ type: "ADD", payload: newTask});
  };

  const removeTask = (id) => {
    dispatch({ type: "REMOVE", payload: id});
  };

  const updateTask = ({ taskId, editText, editPriority }) => {
    dispatch({ type: "UPDATE", payload: { taskId, editText, editPriority }});
  };

  const toggleTaskDone = (id) => {
    dispatch({ type: "TOGGLE_DONE", payload: id});
  };

  const sortTasks = () => {
    dispatch({ type: "SORT"});
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
