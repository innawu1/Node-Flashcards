var Card = require("./card.js")

function Deck(){
	this.cards = [];
}

Deck.prototype.createCard = function(q,a){
 this.cards.push(new Card(q,a));
}

Deck.prototype.displayQuestion = function(){
	console.log(this.cards[0].answer);
}

module.exports = Deck;