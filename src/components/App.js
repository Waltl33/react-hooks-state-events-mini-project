import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS)

  function updateTasks(selectedTask) {
const updateTasksList = task.filter(task => selectedTask.id !== task.text)
setTask(updateTasksList)
  }
  

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList 
        tasks = {TASKS}
        categories = {CATEGORIES}
        getTask = {updateTasks}
      />
    </div>
  );
}

export default App;
