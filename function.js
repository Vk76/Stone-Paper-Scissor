let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');
const scoreBoard_div=document.querySelector('.score-board');
const result_p=document.querySelector('.result > p');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');


function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter=="r")return "stone";
  if (letter=="p")return "paper";
  if (letter=="s")return "scissor";
}


function win(userChoice,computerChoice){
  userChoice_div=document.getElementById(userChoice);
  userScore=userScore+1;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_p.innerHTML=convertToWord(userChoice)+"(user)  beats  "+convertToWord(computerChoice)+" (computer) .You win! ";
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){userChoice_div.classList.remove("green-glow")},300);
}




function lose(userChoice,computerChoice){
  userChoice_div=document.getElementById(userChoice);
  computerScore=computerScore+1;
  computerScore_span.innerHTML=computerScore;
  userScore_span.innerHTML=userScore;
  result_p.innerHTML=convertToWord(userChoice)+"(user)  loses to  "+convertToWord(computerChoice)+" (computer) .You Lost.... ";
  userChoice_div.classList.add('red-glow');
  setTimeout(function(){userChoice_div.classList.remove("red-glow")},300);
}

function draw(userChoice,computerChoice){
  userChoice_div=document.getElementById(userChoice);
  computerScore_span.innerHTML=computerScore;
  userScore_span.innerHTML=userScore;
  result_p.innerHTML=convertToWord(userChoice)+"(user)  equals "+convertToWord(computerChoice)+" (computer) .It's a Draw.... ";
  userChoice_div.classList.add('gray-glow');
  setTimeout(function(){userChoice_div.classList.remove("gray-glow")},300);
}

function game(userChoice) {
  const computerChoice=getComputerChoice();
  switch(userChoice+computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;

  }
}

function main(){
    rock_div.addEventListener('click',function(){
      game("r");
    })

    paper_div.addEventListener('click',function(){
      game("p");
    })

    scissor_div.addEventListener('click',function(){
      game("s");
    })

}

main();
