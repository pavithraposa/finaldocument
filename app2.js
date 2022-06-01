let counter=0;
let firstSelection="";
let secondSelection="";

let dispalyName=document.querySelector('#playername');

let startBtn=document.querySelector('#start');
let resetButton=document.querySelector('.resetbtn');
let exitBtn=document.querySelector('.exitbtn');

let firstCard=false;

const displayScore1 = document.querySelector('#score1');
const displayScore2 = document.querySelector('#score2');
const cards=document.querySelectorAll(".images");

cards.forEach(card=>card.addEventListener('click',flipcard));

shuffleCards();

function shuffleCards(){
    cards.forEach(card=>{
        let randomIndex=Math.floor(Math.random()*6);
        card.style.order=randomIndex;
    });
}

function flipcard(){
    
    if(this===firstSelection) return;
    this.classList.add("clicked");

    if(!firstCard){
        firstCard=true;
        firstSelection=this;

        return; 
    }
     
    firstCard=false;
    secondSelection=this;
    checkMatch();
}

function checkMatch(){
    if(firstSelection.getAttribute("character") === secondSelection.getAttribute("character")){ 

        firstSelection.classList.add("checked"); 
        firstSelection.classList.remove("clicked");
        secondSelection.classList.add("checked");
        secondSelection.classList.remove("clicked");

        firstSelection.removeEventListener('click',flipcard);
        secondSelection.removeEventListener('click',flipcard);
        
        setTimeout(()=>{
                
            firstSelection.classList.remove("checked"); 
            secondSelection.classList.remove("checked");  
            firstSelection.classList.add("remove");
            secondSelection.classList.add("remove");
            
        },800);

    }else{
       
        firstSelection.classList.add("change");
        secondSelection.classList.add("change");

        setTimeout(() => {

            firstSelection.classList.remove("change");
            firstSelection.classList.remove("clicked");
            secondSelection.classList.remove("change");
            secondSelection.classList.remove("clicked");

        }, 800);

        //firstSelection.addEventListener('click',flipcard);
        //secondSelection.addEventListener('click',flipcard);
    }

}

resetButton.addEventListener('click',event=>{
    cards.forEach(card=>{

        card.classList.remove("clicked");
        card.classList.remove("remove");
        card.addEventListener('click',flipcard);
    });

    shuffleCards();                   
});
   



/* function confirmAction() {
    let confirmAction = confirm("Are you sure you want to exit?");
    if (confirmAction) {
      alert("Action successfully executed");
      window.location.href="homepage.html";
    } else {
      alert("Action canceled");
      shuffleCards();
      location.reload();
    }
}

exitBtn.addEventListener('click',event=>{
   
    confirmAction();
 }) */


