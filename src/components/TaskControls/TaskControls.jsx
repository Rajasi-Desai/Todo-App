import { ArrowDownWideNarrow } from "lucide-react";
import "./TaskControls.css"

const TaskControls = ({ showOnlyIncomplete, setShowOnlyIncomplete, sortTasks }) => {
  return (
    <div className="task-controls-container">
      <label>
        <input 
          type="checkbox" 
          checked={showOnlyIncomplete}
          onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
        />
          Show only incomplete
      </label>
      <button
        onClick={sortTasks}
      >
        <ArrowDownWideNarrow />
      </button>
    </div>
  );
};

export default TaskControls;