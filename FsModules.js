const fs = require('fs');

// fs.readFile("file.txt", "utf-8", (error, data) => {
//     console.log(error, data)
// })

// const a = fs.readFileSync("file.txt")
// console.log(a.toString())

// fs.writeFile("file2.txt", "this is second file using write file method", (() => {
//     console.log("file2 is created")
// }))

const b = fs.writeFileSync("file2.txt", "this is second file using write file method by 2 method")
console.log(b)

console.log("node js practice is completed")