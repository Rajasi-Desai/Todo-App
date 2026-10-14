import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";

const TaskList = ({ tasks }) => {
    return (
      <div>
        <ul>
          {
            tasks.map((task) => (
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
                <TaskItem task={task} />
              </li>
            ))
          }
        </ul>
      </div>
    );
};

export default TaskList;