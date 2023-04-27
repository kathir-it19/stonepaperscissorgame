const game = ()=>{
    let Pscore=0;
    let Cscore=0;

    const startgame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introscreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //paly match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands=document.querySelectorAll('.hands img');
        hands.forEach(hand=>{
        hand.addEventListener("animationend",function(){
            this.style.animation="";
        });
    });
        //computer options
        const computeroptions= ["Stone","Paper","Scissor"];
        options.forEach(option=>{
            option.addEventListener("click", function() {
                const computerNumber=Math.floor(Math.random()*3);
                const computerchoice =computeroptions[computerNumber];
                // comparehands(this.textContent,computerchoice);
                setTimeout(()=>{
                compareHands(this.textContent, computerchoice);    
                
                playerHand.src=`${this.textContent}.png`;
                computerHand.src=`${computerchoice}.png`;
            
                },2000);
                
                playerHand.style.animation='shakePlayer 2s ease';
                computerHand.style.animation='shakeComputer 2s ease'

            });
        });    
        
    };

const updateScore = ()=>{
    const playerScore=document.querySelector('.player-score');
    const computerScore=document.querySelector('.computer-score');
    playerScore.textContent=Pscore;
    computerScore.textContent=Cscore;

}

    const compareHands = (playerchoice, computerchoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerchoice === computerchoice) {
          winner.textContent = "It is a tie";
          return;
        }
         if(playerchoice==='Stone'){
            if(computerchoice==='Scissor'){
                winner.textContent='Player is win';
                Pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Computer is win';
                Cscore++;
                updateScore();
                return;
            }
         }
         if(playerchoice==='Paper'){
            if(computerchoice==='Stone'){
                winner.textContent='Player is win';
                Pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Computer is win';
                Cscore++;
                updateScore();
                return;
            }
         }
         if(playerchoice==='Scissor'){
            if(computerchoice==='Paper'){
                winner.textContent='Player is win';
                Pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Computer is win';
                Cscore++;
                updateScore();
                return;
            }
         }
         
    };
    startgame();
    playMatch();
};

game();
