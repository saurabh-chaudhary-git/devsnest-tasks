
// Task 1
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// console.log(`${student.name} ${student.sclass} ${student.rollno}`);

// Task 2
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// console.log(student);
// delete student.rollno;
// console.log(student);

// Task 3
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// var objLength = Object.keys(student).length;
// console.log(objLength);

// Task 4
// var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
// for(let i=0;i<library.length;i++){
//     console.log (`${library[i].author} ${library[i].title} ${library[i].readingStatus}`)
// }

// Task 5
// class Volume {
//     constructor(radius, height) {
//       this.radius = radius;
//       this.height = height;
//     }
//     // Getter
//     get vol() {
//       return this.calcVol();
//     }
//     // Method
//     calcVol() {
//       return (Math.PI* this.radius * 2 * this.height);
//     }
//   }
  
//   const newVol = new Volume(10, 10);
  
//   console.log(newVol.vol.toFixed(2)); 

// Task 6
// var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

// console.log(library.sort((a,b) => a.libraryID-b.libraryID));