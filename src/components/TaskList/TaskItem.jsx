import { Trash, Pencil } from "lucide-react";
import "./TaskItem.css";

const TaskItem = ({ task, toggleTaskDone, removeTask, setEditingTaskId }) => {
  return (
    <>
      <div className="task-item-container">
        <input 
          type="checkbox" 
          checked={task.done}
          onChange={() => toggleTaskDone(task.id)}
        />
        <span
          className="task-item-text"
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        > 
          {task.text} 
          <span className="text-item-priority" >
            {task.priority}
          </span>
        </span>
      </div>
      <div className="button-div">
        <button
          onClick={() => setEditingTaskId(task.id)}
          className="edit-button"
        >
          <Pencil size={16}/>
        </button>
      </div>
      <div className="button-div">
        <button
          onClick={() => removeTask(task.id)}
          className="trash-button"
        >
          <Trash size={16}/>
        </button>
      </div>
    </>
  );
};

export default TaskItem;