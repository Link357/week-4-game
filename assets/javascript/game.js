var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var myScore = 0;
var targetNumber;
var wins = 0;
var losses = 0;

function beginGame() {
    var crystalOne = Math.floor(Math.random() * 12) + 1;
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    var targetNumber = Math.floor(Math.random() * 101) + 20;
    var myScore = 0;
    $(".target-number").innerHTML(targetNumber);
    $('.my-score').innerHTML(myScore);
}

$(".crystal-one").on("click", function () {

    counter += crystalOne;
    $('.my-score').innerHTML(myScore);
    if (counter === targetNumber) {
        wins++;
        beginGame()
    }
    if (counter > targetNumber) {
        lose++;
        beginGame()
    }
});

$(".crystal-two").on("click", function () {

    counter += crystalTwo;
    $('.my-score').innerHTML(myScore);
    if (counter === targetNumber) {
        wins++;
        beginGame()
    }
    if (counter > targetNumber) {
        lose++;
        beginGame()
    }
});

$(".crystal-three").on("click", function () {

    counter += cyrstalThree;
    $('.my-score').innerHTML(myScore);
    if (counter === targetNumber) {
        wins++;
        beginGame()
    }
    if (counter > targetNumber) {
        lose++;
        beginGame()
    }
});

$(".crystal-four").on("click", function () {

    counter += crystalFour;
    $('.my-score').innerHTML(myScore);
    if (counter === targetNumber) {
        wins++;
        beginGame()
    }
    if (counter > targetNumber) {
        lose++;
        beginGame()
    }
});
