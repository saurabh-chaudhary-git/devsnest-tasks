const quote =document.getElementById("quote");
const genQuote=document.getElementById("genQuote");
genQuote.addEventListener("click",()=>{
    async function fetchFacts(){
        const response = await fetch('https://api.chucknorris.io/jokes/random/');
        const facts=await response.json();
        quote.textContent=facts.value;
        console.log(facts.value);
    }
    fetchFacts();
})
// async function fetchFacts(){
//     const response = await fetch('https://api.chucknorris.io/jokes/random/');
//     const facts=await response.json();
//     console.log(facts.value);
// }
// fetchFacts();
// https://api.chucknorris.io/