const game=()=>{
let pscore=0;
let cscore=0;

const startgame=()=>{
    const pbutton=document.querySelector(".intro button");
    const intro=document.querySelector(".intro");
    const match=document.querySelector(".match");

    pbutton.addEventListener("click",()=>{
        intro.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });
};

const playmatch=()=>{
    const options=document.querySelectorAll(".options button");
    const playerHand=document.querySelector(".player-hand");
    const computerHand=document.querySelector(".computer-hand");
    const hands=document.querySelectorAll(".hands img");
    hands.forEach(hand=>{
        hand.addEventListener("animationend",function(){
            this.style.animation="";
        });
        // this.style.animation
    });

    const computerOptions=["rock","paper","scissors"];
    options.forEach(option=>{
        option.addEventListener("click",function(){
            // console.log(this);
            const computernumber=Math.floor(Math.random()*3);
            const computerchoice=computerOptions[computernumber];
            // console.log(computedchoice);
// console.log(this);
setTimeout(()=>{
    comparehands(this.textContent,computerchoice);
    playerHand.src = `./${this.textContent}.png`;
                
    computerHand.src=`./${computerchoice}.png`;
},2000)
// comparehands(this.textContent,computerchoice);
// playerHand.src = `./${this.textContent}.png`;
            
// computerHand.src=`./${computerchoice}.png`;
playerHand.style.animation="shakeplayer 2s ease 0.1s"
computerHand.style.animation="shakecomputer 2s ease 0.1s"
    });
  });
};
const updatescore=()=>{
    const playerscore=document.querySelector(".player-score p")
    const computerscore=document.querySelector(".computer-score p")
    playerscore.textContent=pscore;
    computerscore.textContent=cscore;
}
       
const comparehands=(playerchoice,computerchoice)=>{
    const winner=document.querySelector(".winner");
if(playerchoice===computerchoice){
    winner.textContent="It's a tie";
    return;
};
 if(playerchoice==="rock"){
    if(computerchoice==="scissors"){
        winner.textContent="Player wins";
        pscore++;
        updatescore();
    }else{
        winner.textContent="computer wins";
        cscore++;
        updatescore();
    }

};
if(playerchoice==="scissors"){
    if(computerchoice==="paper"){
        winner.textContent="Player wins";
        pscore++;
        updatescore();
    }else{
        winner.textContent="computer wins";
        cscore++;
        updatescore();
    }

};

if(playerchoice==="paper"){
    if(computerchoice==="rock"){
        winner.textContent="Player wins";
        pscore++;
        updatescore();
    }else{
        winner.textContent="computer wins";
        cscore++;
        updatescore();
    }

};
}








playmatch();


startgame();





};
game();
// const winner=document.querySelector(".winner");
// console.log(winner.textContent);