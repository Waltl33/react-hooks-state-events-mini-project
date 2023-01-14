import React from "react";
import Task from "./Task";




function TaskList({tasks, idx}) {
  
  const myTasks = tasks.map(tasks => 
    <Task
      text = {tasks.text}
      category = {tasks.category}
      key = {idx}
    />
  )
  

  
  return (
    <div className="tasks">
      {myTasks}
    </div>
  );
}

export default TaskList;
