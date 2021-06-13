const numOne=document.getElementById("num-one");
const numTwo=document.getElementById("num-two");
const answer=document.getElementById("ans");
const sumNum=document.getElementById("add");
const minNum=document.getElementById("minus");
const multNum=document.getElementById("multiply");
const divNum=document.getElementById("divide");

sumNum.addEventListener("click",()=>{
    let result=parseInt(numOne.value)+parseInt(numTwo.value);
    answer.value=result;    
})
minNum.addEventListener("click",()=>{
    let result=parseInt(numOne.value)-parseInt(numTwo.value);
    answer.value=result;    
})
multNum.addEventListener("click",()=>{
    let result=parseInt(numOne.value)*parseInt(numTwo.value);
    answer.value=result;    
})
divNum.addEventListener("click",()=>{
    let result=parseInt(numOne.value)/parseInt(numTwo.value);
    answer.value=result;    
})
