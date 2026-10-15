import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";
import { useState } from "react";

const TaskList = ({ tasks, showOnlyIncomplete, toggleTaskDone, removeTask, updateTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  return (
    <div>
      <ul>
        {
          tasks
          .filter((task) => !showOnlyIncomplete || !task.done)
          .map((task) => (
            <li 
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ccc",
                gap: "10px",
              }}
            >
              {editingTaskId === task.id ? 
                (<EditTaskForm 
                  task={task} 
                  setEditingTaskId={setEditingTaskId}
                  updateTask={updateTask}
                />) :
                (<TaskItem 
                  task={task} 
                  toggleTaskDone={toggleTaskDone}
                  removeTask={removeTask}
                  setEditingTaskId={setEditingTaskId}
                />)
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TaskList;