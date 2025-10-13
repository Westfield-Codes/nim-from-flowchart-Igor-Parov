/* Nim Trainer by Ihor Parov
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */
123
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
trainer = confirm("Trainer mode?");
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
count = 0;
    while(count<21){
     userTurn();
    if(count>20) alert("You lose!")
    else {
     cpuTurn() ;
     if(count>20) alert("You win!");
}
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
    if(turn<1||turn>3){
        alert("Your Input is Invalid!");
    }
    else{
    turn+=count;
    alert("Count is now " + count);
    }
    
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
count+=3
}
