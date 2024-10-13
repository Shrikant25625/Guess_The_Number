let randomnumber=parseInt(Math.random()*100+1);
const userinput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const hiorlo=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultparas');
const p = document.createElement('p');

let previousGuess=[];
let num=0;

let playgame=true;
if(playgame){
submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userinput.value);
    validatenumber(guess);
})
}



function validatenumber(guess){
 if (isNaN(guess)){
    alert('please enter valid number');
 }
 else if(guess <1){
    alert('please enter valid number');
 }
 else if(guess>100){
    alert('please enter valid number');
 }
 else {
    previousGuess.push(guess);
    if(num ===10){
        displayMessage(`the random number is ${randomnumber}`); 
        remaining.textContent=0;
        endgame();
    }
    else {
        displayguess(guess);
        checknumber(guess);
        }
 }
}
function checknumber(guess){
   if (guess===randomnumber){
    displayMessage('you guesses the right number ');
    endgame();
   }
   else if ( guess < randomnumber){
    displayMessage('youe number is too less');
   }
   else if(guess>randomnumber){
    displayMessage('your number id too large');
   }
}

function displayguess(guess){
      userinput.value='';
      guessSlot.textContent=`${guess}  `;
      num++;
     remaining.textContent =` ${11-num}`;
}
function displayMessage(message){
     hiorlo.innerHTML=`<h2>${message}</h2>`;
}

function endgame(){
userinput.value='';
userinput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h2 id="newgame">Start new game</h2>`
startOver.appendChild(p);
   playgame=false; 
startgame();
}

function startgame(){
   const  newgame=document.querySelector('#newgame');
   newgame.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random()*100+1);
    previousGuess=[];
    num=0;
    guessSlot.innerHTML='';
    remaining.innerHTML =` ${10-num}`;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playgame=true;
   })
}


