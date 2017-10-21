var inquire = require("inquirer");
var Deck = require("./deck.js");

var deck = new Deck();


inquire.prompt([
{message: "Enter a question:",
 name: "question"},
 {message: "Enter the answer:",
  name: "answer"}
]).then(function(ans){
   deck.createCard(ans.question, ans.answer);
   deck.displayQuestion();
});



//If (creating a new card){
//Collect keyword/statement to be used to create card by card.js
//}
//If (playing new game){
//Select statement from statement array
//compare user answer to answer in answer array}
/*1)User selects action
	1)Create new card (function 1)
	2)Answer questions from deck (function 2)
2)If function 1{
	collect statement and keyword from user
	create new card object using user input
	push card object into deck array
	}

3) if function 2{
   select card object
   display statement from card object
   collect keyword from user
   compare user answer to answer on card object
	if(correct){
	  inform user that they are correct
	  move to next card object
	} else
	  subtract 1 from remaining attempts
	if(attempts = 0){
	

5) on exit go back to step 1*/

