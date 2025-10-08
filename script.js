/* Nim Trainer by Ihor Parov
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false;
var count = 0;
/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
let again = true;
while(again==true){  
let trainer = confirm("Trainer mode?");
playNim()
again = confirm("Again?");

}
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
let count = 0;
while(count<21){
    userTurn();
    if(count>20)alert("You lose!");
    cpuTurn() ;
    if(count>20) alert("You win!");
}

}
/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
    let turn = prompt("Give me a number 1-3");
    turn=parseInt(turn);
    if(turn<1||turn>3)alert("Your Input is Invalid!");
    else(turn+count);

}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
turn = 0
 if(count = 17) turn = 3
 else if (count= 18) turn = 2
 else if (count>18) turn = 1
 else if (trainer == true) turn = 4 - count % 4
 else   turn = (int)(Math.random() * (max - min + 1) + min);
count+=turn
turn=count
}
