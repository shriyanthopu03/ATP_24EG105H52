// 💡 Exercise 2: Update User Object

// Goal: Learn object cloning & adding new property

// You are given:
        
//         let user = {
//             name: "Ravi",
//             city: "Hyderabad"
//         };

// Tasks

//         -> Create a new object updatedUser
        
//         -> Copy all properties from user
        
//         -> Add a new property age: 25
        
//         -> Print both objects



// ✅ Expected Output
//         { name: "Ravi", city: "Hyderabad" }
//         { name: "Ravi", city: "Hyderabad", age: 25 }

// 👉 Original object should remain unchanged.

 let user = {
            name: "Ravi",
            city: "Hyderabad"
        };

let updatedUser=user
console.log(user)
updatedUser={...updatedUser,age:25}
console.log(updatedUser)



//💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15



