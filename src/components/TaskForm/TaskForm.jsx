import { Plus } from "lucide-react";
import { useState } from "react";
import "./TaskForm.css"

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = new useState("");
  const [newPriority, setNewPriority] = new useState(1);

  const handleSubmit = () => {
    if(newTask.trim()) {
      //add task
      addTask({
        id: Date.now(),
        text: newTask,
        priority: newPriority,
        done: false,
      });

      //clear the task
      setNewTask("");
      setNewPriority(1);
    }
  };

  return (
    <div className="task-form-container">
      <input 
        type="text" 
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="input-text"
      />
      <input 
        type="number" 
        min={1}
        value={newPriority}
        onChange={(e) => setNewPriority(Number(e.target.value))}
        className="input-priority"
      />
      <button
        onClick={handleSubmit}
        className="add-button"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default TaskForm;