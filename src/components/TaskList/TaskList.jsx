import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";
import { useState } from "react";
import "./TaskList.css"

const TaskList = ({ tasks, showOnlyIncomplete }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  return (
    <div>
      <ul>
        {
          tasks
          .filter((task) => !showOnlyIncomplete || !task.done)
          .map((task) => (
            <li key={task.id}>
              {editingTaskId === task.id ? 
                (<EditTaskForm 
                  task={task} 
                  setEditingTaskId={setEditingTaskId}
                />) :
                (<TaskItem 
                  task={task} 
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