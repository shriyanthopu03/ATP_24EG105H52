  // TODO: Export these validation functions
  // // 1. Validate task title (not empty, min 3 chars)
  function validateTitle(title) {
  if(!title){
    return "Ttitle required"
  }
  if(title.length<3)
  {
    return "MIN 3 char requied"
  }
  return true;
  }
  // 2. Validate priority (must be: low, medium, high)
  function validatePriority(priority) {
  const priorities = ["LOW", "MEDIUM", "HIGH"];
  let result=priorities.includes(priority)
  if(result==false){
  return "Invalid priority"
  }
  return true;
  }
                      
  // 3. Validate due date (must be future date)
  function validateDueDate(date) {
  let duedate=new Date(date)
  let today=new Date()
  if(duedate<today)
    {
    return "Due date failed"
    }
  return true
  }

  export {validateDueDate,validatePriority,validateTitle}