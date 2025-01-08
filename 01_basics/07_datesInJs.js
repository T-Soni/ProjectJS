// Date
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2003, 5, 12, 11, 36, 3) //month index starts with 0
// let myCreatedDate = new Date(2003, 5, 12) //month index starts with 0
// let myCreatedDate = new Date("2003-06-12") //YYYY-MM-DD
let myCreatedDate = new Date("06-12-2003") // MM-DD-YYYY
console.log(myCreatedDate.toLocaleString());

console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());



