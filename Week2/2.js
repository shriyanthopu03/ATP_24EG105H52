// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log(longCourses);

//     2. map() to convert course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());
console.log(upperCaseCourses);

//     4. find() the course "react"
const reactCourse = courses.find(course => course === "react");
console.log(reactCourse);

//     5. findIndex() of "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log(nodeIndex);


