import React from "react";
import Task from "./Task";

function TaskList({tasks, getTask}) {
  return (
    <div className="tasks">
      {tasks.map(task => <Task
        task={task}
        key = {task.id}
        getNewTask = {getTask}
      />)}
    </div>
  );
}

export default TaskList;
