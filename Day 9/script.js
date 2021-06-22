// Task 1
// const employee_one={
//     department:"IT",
//     position:function(){
//         console.log(`Head of the ${this.department} department`)
//     }
// }
// const employee_two={
//     department:"Operations",
//     salary:function(salary){
//         console.log(`Salary is ${salary}`)
//     }
// }

// // CALL
// employee_one.position.call(employee_two);

// // APPLY
// employee_two.salary.apply(employee_one,["10,000"])

// // BIND
// const employee_three={
//     department:"HR"
// }
// const employee_four=employee_one.position.bind(employee_three)
// employee_four();

// Task 2

// const firstDiv=document.getElementById("one");
// const buttonEvent=document.getElementById("btn");
// const buttonTwoEvent=document.getElementById("btn_two");

// buttonEvent.addEventListener('click',()=>{
//     firstDiv.style.backgroundColor="red";
// })
// firstDiv.addEventListener('mouseover',()=>{
//     firstDiv.style.backgroundColor="yellow";
// })
// buttonTwoEvent.addEventListener('click',()=>{
//     firstDiv.textContent="Ben 10";
// })


