import React from "react";
import Task from "./Task";
function TaskList({tasks, idx, getTask}) {

  const myTasks= tasks.map(task => 
      <Task 
        text = {task.text}       
         category = {task.category}
        key = {idx}
        getNewTask = {getTask}
      />
  )


  return (
    <div className="tasks">
      {myTasks}
      
    </div>
  );
  
}

export default TaskList;
