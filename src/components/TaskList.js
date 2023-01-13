import React from "react";
import Tasks from "./Task";

function TaskList({tasks, handleDeleteTask}) {
 console.log(tasks)




  return (
    <div className="tasks">
     {tasks.map(task => (
      <Tasks key={task.text} task={task} 
        handleDeleteTask ={handleDeleteTask}
      />
     ))}
    </div>
  );
}

export default TaskList;
