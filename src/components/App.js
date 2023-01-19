import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS)


  const handleDeleteTask = (deletedTask) => {
    const filteredTasks = task.filter(task => deletedTask.text !== task.text)
    setTask(filteredTasks) 
   }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList 
        tasks = {TASKS}
        categories = {CATEGORIES}
        getTask = {handleDeleteTask}
      />
    </div>
  );
}

export default App;
