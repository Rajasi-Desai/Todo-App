import { Plus } from "lucide-react";
import { use, useState } from "react";

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

  const inputStyle = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input 
          type="text" 
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            ...inputStyle,
            flexGrow: 1,
          }}
        />
        <input 
          type="number" 
          min={1}
          value={newPriority}
          onChange={(e) => setNewPriority(Number(e.target.value))}
          style={{
            ...inputStyle,
            width: "3.75rem",
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          display: "block",
          margin: "20px auto 0",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px",
          border: "none",
          cursor: "pointer",
        }}  
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default TaskForm;