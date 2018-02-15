var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var counter = 0;
var targetNumber;
var wins = 0;
var lose = 0;

function beginGame() {
    crystalOne = [Math.floor(Math.random() * 12) + 1];
    crystalTwo = [Math.floor(Math.random() * 12) + 1];
    crystalThree = [Math.floor(Math.random() * 12) + 1];
    crystalFour = [Math.floor(Math.random() * 12) + 1];
    targetNumber = [Math.floor(Math.random() * 101) + 20];
    counter = 0;
    $(".target-number").html(targetNumber);
    $('.my-score').html(counter);
    $('.wins').html(wins);
    $('.lose').html(lose);
}
beginGame();

$(".crystal-one").on("click", function () {
    console.log(crystalOne);
    counter = parseInt(counter) + parseInt(crystalOne);
    console.log(counter)
    $('.my-score').html(counter);
    if (counter == targetNumber) {
        wins++;
        $('.wins').html(wins);
        beginGame()
    }
    else if (parseInt(counter) > parseInt(targetNumber)) {
        lose++;
        $('.lose').html(lose);
        beginGame()
    }
});

$(".crystal-two").on("click", function () {

    counter = parseInt(counter) + parseInt(crystalTwo);
    console.log(counter)
    $('.my-score').html(counter);
    if (counter == targetNumber) {
        wins++;
        $('.wins').html(wins);
        beginGame()
    }
    else if (parseInt(counter) > parseInt(targetNumber)) {
        lose++;
        $('.lose').html(lose);
        beginGame()
    }
});

$(".crystal-three").on("click", function () {

    counter = parseInt(counter) + parseInt(crystalThree);
    console.log(counter);
    console.log(targetNumber);
    console.log(parseInt(counter));
    console.log(parseInt(targetNumber));


    $('.my-score').html(counter);
    if (counter == targetNumber) {
        wins++;
        $('.wins').html(wins);
        beginGame()
    }
    else if (parseInt(counter) > parseInt(targetNumber)) {
        lose++;
        $('.lose').html(lose);
        beginGame()
    }
});

$(".crystal-four").on("click", function () {

    counter = parseInt(counter) + parseInt(crystalFour);
    console.log(counter)
    $('.my-score').html(counter);
    if (counter == targetNumber) {
        wins++;
        $('.wins').html(wins);
        beginGame()
    }
    else if (parseInt(counter) > parseInt(targetNumber)) {
        lose++;
        $('.lose').html(lose);
        beginGame()
    }
});

