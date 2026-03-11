// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//1. filter() employees from IT department
    let r1=employees.filter(element=>element.department==="IT")
    console.log(r1)
//2. map() to add:netSalary = salary + 10% bonus
let r2=employees.map(element=>({...element,netSalary:element.salary*1.1}))
console.log(r2)
//3. reduce() to calculate total salary payout
let r3=employees.reduce(function(accumlator,element){
    return accumlator+element.salary},0)
console.log(r3) 
//4. find() employee with salary 30000
let r4=employees.find(element=>element.salary===30000)
console.log(r4)
//5. findIndex() of employee "Neha"
let r5=employees.findIndex(element=>element.name==="Neha")
console.log(r5)
