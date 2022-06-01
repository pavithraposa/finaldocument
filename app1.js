let counter=0;
let firstSelection="";
let secondSelection="";

const displayScore1 = document.querySelector('#score1');
const displayScore2 = document.querySelector('#score2');

/* const txt1=document.getElementById('player1');
const out1=document.getElementById('playername') */




/* var dispalyName=document.getElementById('playername'); */
let startBtn=document.querySelector('#start');
const playerDisplay=document.querySelector('.display-player');
let currentplayer='1';

let resetButton=document.querySelector('.resetbtn');
 
let playerTurn=true;
let score1=0;
let score2=0;

let dispalyName=currentplayer;
let player1=document.querySelector("#player1")
let player2=document.querySelector("#player2")
let historytext=document.querySelector(".history");
let matchingCards=0;
/* let input = document.getElementById('player1');
let inputVal = "";
if (input) {
    inputVal = input.value;
    console.log(inputVal);
}

dispalyName.innerHTML=`${inputVal}`; 
console.log(dispalyName);
 */


/* let dispalyName1=document.getElementById("player1").value;
dispalyName.innerHTML=dispalyName1;
console.log(dispalyName) */
/* startBtn.aaddEventListener('click',()=>{
    getInputValue();
    
}) */
/*let inputValue1;
const getValueInput = () =>{
    inputValue1 = document.querySelector('#player1').value; 
    console.log(inputValue1);
    document.querySelector("#playername").innerHTML =  `First input value: ${inputValue1}`;
}

// let playername=player1.toString;
console.log(playername);
console.log(inputValue1) */
const cards=document.querySelectorAll(".images");
shuffleCards();

cards.forEach(card=>{
    card.addEventListener("click",()=>{
        //when ever you click on the card a class name 'clicked' will be added to that card in the html
       card.classList.add("clicked");


       if(counter === 0){
           firstSelection=card.getAttribute("character");
           counter++;
           
       }else{
          secondSelection=card.getAttribute("character");
          counter=0;
        
          if(firstSelection === secondSelection){
                const correctCards = document.querySelectorAll(".images[character='" + firstSelection + "']");
                
                    correctCards[0].classList.add("checked"); 
                    correctCards[0].classList.remove("clicked")
                    correctCards[1].classList.add("checked");
                    correctCards[1].classList.remove("clicked");
                    matchingCards++;
                    console.log(matchingCards);
                   
                    setTimeout(()=>{
                          
                        correctCards[0].classList.remove("checked"); 
                        correctCards[1].classList.remove("checked"); 
                        
                        correctCards[0].classList.add("remove");
                        correctCards[1].classList.add("remove");
                      
                    },800);

                    if(playerTurn) {
                        score1+=2;
                        displayScore1.textContent=score1.toString();
                        /* playername.innerHTML=player1.value; */
                       
                      

                    }else{
                        score2+=2;
                        displayScore2.textContent=score2.toString();
                        // playername.innerHTML=player2.value;
                  
                    }

                    scoreboard();
                    
                    if(matchingCards==12) {

                        if(score1>score2){
            
                            historytext.innerText=`Player 1 Win's the Chipmunks`;
                    
                        } else{
                
                           historytext.innerText=`Player 2 Win's the Chipmunks`;
                
                        }
                   }
                    
                   

                    
                        

                    
                    resetButton.addEventListener('click',event=>{
                        
                        correctCards[0].classList.remove("remove");
                        correctCards[1].classList.remove("remove");
                        score1=0;
                        score2=0;
                        displayScore1.textContent=score1.toString();
                        displayScore2.textContent=score1.toString();
                        matchingCards=0;
                        
                        shuffleCards();

                    });
                    
                    /* score1++;
                    console.log(score1); */
                 
                
                   /*  correctCards[0].style.backgroundImage = "none";
                    correctCards[1].style.backgroundImage = "none";
                    correctCards[0].style.backgroundColor = "transparent";
                    correctCards[1].style.backgroundColor = "transparent"; */
                        
                
                
            }else{
                const incorrectCards = document.querySelectorAll(".images.clicked");
            
                incorrectCards[0].classList.add("change");
                incorrectCards[1].classList.add("change");

              setTimeout(() => {
                    incorrectCards[0].classList.remove("change");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("change");
                    incorrectCards[1].classList.remove("clicked");
                }, 800);

                if(playerTurn){
                    playerTurn=false;
                    currentplayer='2';
                    playerDisplay.innerText=currentplayer;
                   
                }
                else if(!playerTurn){
                    playerTurn=true;
                    currentplayer='1';
                    playerDisplay.innerText=currentplayer;
                    
                }
            }
 
        } 
    });
});


function scoreboard(){

    if(score1>score2){

        historytext.innerText=`Player 1 is leading the game`;
    
    } else{

        historytext.innerText=`Player 2 is leading the game`;

    }
}




function shuffleCards(){
    cards.forEach(card=>{
        let randomIndex=Math.floor(Math.random()*54);
        card.style.order=randomIndex;
    });
}


function getInputValue(){
    let inputVal=document.getElementById("player1").value;
    dispalyName.textContent=`${inputVal}`;
    
}