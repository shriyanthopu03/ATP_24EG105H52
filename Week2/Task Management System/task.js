// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle, validatePriority, validateDueDate } from './validator.js';
const tasks = [];
// 1. Add new task
  function addTask(title, priority, dueDate) 
  {
  // Validate using imported functions
  if (!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate) ) {
  return "Invalid task";
  }
  else {
  // If valid, add to tasks array
  tasks.push({ title, priority, dueDate, completed: false });
  }
  }
                  
// 2. Get all tasks
function getAllTasks() {
// Return all tasks
return tasks;
}
                  
// 3. Mark task as complete
function completeTask(taskId) {
  return true;
}


export { addTask, getAllTasks, completeTask };