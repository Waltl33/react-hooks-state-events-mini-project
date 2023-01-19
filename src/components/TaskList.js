import React from "react";

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {tasks.map(task => <Task
        task={tasks}
      />)}
    </div>
  );
}

export default TaskList;
