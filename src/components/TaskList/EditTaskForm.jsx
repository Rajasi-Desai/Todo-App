import { Check } from "lucide-react";
import { useState } from "react";
import "./EditTaskForm.css"

const EditTaskForm = ({ task, setEditingTaskId, updateTask }) => {
  const [editText, setEditText] = useState(task.text);
  const [editPriority, setEditPriority] = useState(task.priority);

  const saveEdit = () => {
    if(editText.trim()) {
      updateTask({ taskId:task.id, editText, editPriority })
      setEditingTaskId(null);
    }
  }

  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="edit-text"
      />
      <input
        type="number"
        min="1"
        value={editPriority}
        onChange={(e) => setEditPriority(Number(e.target.value))}
        className="edit-priority"
      />
      <button
        onClick={saveEdit}
        className="save-button"
      >
        <Check size={16} />
      </button>
    </>
  );
};

export default EditTaskForm;