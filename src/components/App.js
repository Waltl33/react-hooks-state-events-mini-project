import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")


  const handleDeleteTask = (deletedTask) => {
    const filteredTasks = tasks.filter(task => deletedTask.text !== task.text)
    setTask(filteredTasks) 
   }

  function selectedCategory(category){
    setCategory(category)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories = {CATEGORIES}
        getCategory = {selectedCategory}
        
      />
      <NewTaskForm />
      <TaskList 
        tasks = {tasks}
        handleDeleteTask = {handleDeleteTask}
      />
    </div>
  );
}

export default App;
