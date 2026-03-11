// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

class Book{
      title
      author
      pages
      isAvailable
    //   title (string)
    //   author (string)
    //   pages (number)
    //   isAvailable (boolean, default: true)
      constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
      }
      
      borrow(){
        return this.isAvailable=false
      }
      returnBook(){
        return this.isAvailable=true
      }
      getInfo(){
        return `${this.title} ${this.author} ${this.pages} ${this.isAvailable}`
      }
      isLongBook(){
        if(this.pages>300){
            return true
        }
        else{
            return false
        }
      }
}

let ob1=new Book("RAMU","ESHWAR",365,true)
let ob2=new Book("RAMU","ESHWAR",365,true)
let ob3=new Book("RAMU","ESHWAR",365,true)
let ob4=new Book("RAMU","ESHWAR",365,true)
let ob5=new Book("RAMU","ESHWAR",365,true)


console.log(ob.getInfo())
ob.borrow()
console.log(ob.getInfo())
ob.returnBook()
console.log(ob.getInfo())

//   2. Perform the following operations:

//       i. Display info of all books
console.log(ob1.getInfo())
console.log(ob2.getInfo())
console.log(ob3.getInfo())
console.log(ob4.getInfo())
console.log(ob5.getInfo())
//       ii. Borrow 2 books and show their availability status
ob1.borrow()
ob2.borrow()
console.log(ob1.getInfo())
console.log(ob2.getInfo())
//       iii. Return 1 book and show updated status
ob1.returnBook()
console.log(ob1.getInfo())
//       iv. Count how many books are "long books" (more than 300 pages)
let count=0
if(ob1.isLongBook()){
    count++   
}
if(ob2.isLongBook()){
    count++
}
if(ob3.isLongBook()){ 
    count++
}
if(ob4.isLongBook()){
    count++
}
if(ob5.isLongBook()){
    count++ 
}
console.log(count)

//       v. List all available books
console.log("Available books:")
if(ob1.isAvailable){
    console.log(ob1.title)
}
if(ob2.isAvailable){
    console.log(ob2.title)
}
if(ob3.isAvailable){
    console.log(ob3.title)
}
if(ob4.isAvailable){
    console.log(ob4.title)
}
if(ob5.isAvailable){
    console.log(ob5.title)
}
