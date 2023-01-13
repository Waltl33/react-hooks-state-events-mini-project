import React from "react";
// import TaskList from "./TaskList";
function Task({task, handleDeleteTask}) {

  const handleDelete = () => {
    handleDeleteTask(task);
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick = {handleDelete}className="delete">X</button>
    </div>
  );
}

export default Task;
