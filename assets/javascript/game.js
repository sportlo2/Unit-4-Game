var winCount = 0;
var lossCount = 0;
var targetScore = 0;
var currentScore = 0;

var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;

$("#totalWins").html(winCount);
$("#totalLosses").html(lossCount);
$("#sumTotal").html(currentScore);



var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to start game
var newGame = function() {
    // reset the current score
    currentScore = 0;
    // reset gem values to 0
    gemOne = 0;
    gemTwo = 0;
    gemThree = 0;
    gemFour = 0;

    // set a new target score bt 20-80
    targetScore = getRandom(20, 80);

    // set diff values for each of the crystals between 1-12

    gemOne = getRandom(1, 12);
    gemTwo = getRandom(1, 12);
    gemThree = getRandom(1, 12);
    gemFour = getRandom(1, 12);

    console.log(gemOne + ", " + gemTwo + ", " + gemThree + ", " + gemFour)

    // change HTML to reflect changes
    $("#randomNumber").html(targetScore);
    $("#sumTotal").html(currentScore);

    // run click functions
    $("#crystalOne").click(function() {
        currentScore = currentScore + gemOne;
        //update HTML to reflect updated score
        $("#sumTotal").html(currentScore);
        gameReset();
    });

    $("#crystalTwo").click(function() {
        currentScore = currentScore + gemTwo;
        $("#sumTotal").html(currentScore);
        gameReset();

    });
    $("#crystalThree").click(function() {
        currentScore = currentScore + gemThree;
        $("#sumTotal").html(currentScore);
        gameReset();
    });
    $("#crystalFour").click(function() {
        currentScore = currentScore + gemFour;
        $("#sumTotal").html(currentScore);
        gameReset();
    });
}


// function to check if win/loss 
function gameReset() {


    if (currentScore === targetScore) {

        winCount++;
        $("#totalWins").text(winCount);

        alert("You Win!!");
        newGame();

    } else if (currentScore > targetScore) {
        lossCount++;
        $("#totalLosses").text(lossCount);

        alert("Aha! You Lost!!");
        newGame();
    };
};

newGame();


// update "Losses" if total score is above randomly generated number
// then alert "You Lose"
// update loss counter
// game starts over

// If total score is equal to or above generated number then resetart game