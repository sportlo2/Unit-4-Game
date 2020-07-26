var winCount = 0;
var lossCount = 0;
var targetScore = 0;
var currentScore = 0;


$("#totalWins").html(winCount);
$("#totalLosses").html(lossCount);



var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var newGame = function() {
    // reset the current score
    currentScore = 0;

    // set a new target score bt 20-80
    targetScore = getRandom(20, 80);

    // set diff values for each of the crystals between 1-12

    var gemOne = getRandom(1, 12);
    var gemTwo = getRandom(1, 12);
    var gemThree = getRandom(1, 12);
    var gemFour = getRandom(1, 12);

    // change HTML to reflect changes
    $("#randomNumber").html(targetScore);
    $("#sumTotal").html(currentScore);

    // display 4 crystals and assign a random number to it. 
    // Value of each crystal should be between 1-12.
    $("#crystalOne").click(function() {
        currentScore = currentScore + gemOne;
        $("#sumTotal").html(currentScore);
    });

    $("#crystalTwo").click(function() {
        currentScore = currentScore + gemTwo;
        $("#sumTotal").html(currentScore);

    });
    $("#crystalThree").click(function() {
        currentScore = currentScore + gemThree;
        $("#sumTotal").html(currentScore);
    });
    $("#crystalFour").click(function() {
        currentScore = currentScore + gemFour;
        $("#sumTotal").html(currentScore);
    });
}

console.log(currentScore);
console.log(targetScore);

newGame();
// when click a crystal total score counter updates by crystal random assigned number

// *****Ending game

// update "Wins:" if true:
// total score matches randomly generated number
// then alert "You Win"
// update win counter
//game starts over


function gameReset() {
    if (currentScore === targetScore) {
        winCount = 0;
        alert("You Win!!");
        winCount++;
        $("#totalWins").text(winCount);
        newGame();
    } else if (currentScore > targetScore) {
        alert("Aha! You Lost!!");
        lossCount++;
        $("#totalLosses").text(lossCount);
        newGame();
    };
};

console.log(winCount);
console.log(lossCount);
gameReset();



// update "Losses" if total score is above randomly generated number
// then alert "You Lose"
// update loss counter
// game starts over

// If total score is equal to or above generated number then resetart game