/*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/
var cards = [
{
	rank: "queen",
	suit:  "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
},

];
var cardsInPlay = [];
var checkForMatch = function() {
	//if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay [1]){
		alert ("You found a match.");
	}
else {
		alert ("Sorry, try again.");
	}
}
var flipcard = function(cardId) {
console.log("User flipped " + cards[cardId].rank);
console.log("cardImage");
console.log("suit");
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}
flipcard(0);
flipcard(2);





