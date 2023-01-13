import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTask] = useState(TASKS)
  const [categories, setCategories] = useState("All")

  function updateTasks(selectedTask) {
    console.log(selectedTask)
    const updateTaskList = tasks.filter(task => task.id !== selectedTask)
    console.log(updateTaskList)
    setTask(updateTaskList)
  }
  function selectCategory(category){
    console.log(category)
    setCategories(category)
  }
console.log("Categories State", categories)


const updatedTask = (tasks.filter(task => tasks.categories === categories))
    // console.log(updatedTasks)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories = {CATEGORIES} 
        getCategory = {selectCategory}
      />
      <NewTaskForm />
      <TaskList
      tasks = {TASKS}
      getTask = {updateTasks} />
    </div>
  );
}

export default App;
