var wins = 0;
var losses = 0;
var score = 0;
var generateNumber = Math.floor(Math.random() * 61) + 20;

$("#totalWins").html(wins);
$("#totalLosses").html(losses);



//counter


// generate random number 20-80
function newGame() {

    var gemOne = Math.floor(Math.random() * 12 + 1);
    var gemTwo = Math.floor(Math.random() * 12 + 1);
    var gemThree = Math.floor(Math.random() * 12 + 1);
    var gemFour = Math.floor(Math.random() * 12 + 1);

    
    $("#randomNumber").html(generateNumber);

    
    $("#sumTotal").html(score);

    // display 4 crystals and assign a random number to it. 
    // Value of each crystal should be between 1-12.
    $("#crystalOne").click(function () {
        score = score + gemOne;
        console.log(gemOne);
        console.log(score);
        $("#sumTotal").html(score);
    });

    $("#crystalTwo").click(function () {
        score = score + gemTwo;
        console.log(gemTwo);
        console.log(score);
        $("#sumTotal").html(score);

    });
    $("#crystalThree").click(function () {
        score = score + gemThree;
        console.log(gemThree);
        console.log(score);
        $("#sumTotal").html(score);
    });
    $("#crystalFour").click(function () {
        score = score + gemFour;
        console.log(gemFour);
        console.log(score);
        $("#sumTotal").html(score);
    });
}
// when click a crystal total score counter updates by crystal random assigned number

// *****Ending game

// update "Wins:" if true:
// total score matches randomly generated number
// then alert "You Win"
// update win counter
//game starts over


function gameWinner() {
    if (score === generateNumber) {
        wins = 0;
        alert("You Win!!");
        wins++;
        $("#totalWins").html(wins);
        newGame();

    } else if (score > generateNumber) {
        alert("Aha! You Lost!!");
        losses++;
        $("#totalLosses").html(losses);
        newGame();
    }
}
newGame();
gameWinner();
// update "Losses" if total score is above randomly generated number
// then alert "You Lose"
// update loss counter
// game starts over

// If total score is equal to or above generated number then resetart game