const cards=document.querySelectorAll(".memory-card");
let hasFlippedCard=false;
let firstCard,secondCard;


function flipCard(){
    this.classList.add("flip");
    if(hasFlippedCard){
        hasFlippedCard=true;
        firstCard=this;
    }
    else {
        hasFlippedCard=false;
        secondCard=this;
    }
    if(firstCard.data.framework==secondCard.data.framework){
        firstCard.removeEventListener("click",flipCard);
        secondCard.removeEventListener("click",flipCard);
    }
    else{
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
    }
   
}   

cards.forEach(card=>card.addEventListener("click", flipCard));
