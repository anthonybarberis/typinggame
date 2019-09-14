window.onload = init;

var words = [
    'breathe',
    'able',
    'abrupt',
    'stop',
    'bottle',
    'tail',
    'utter',
    'snotty',
    'fine',
    'teaching',
    'guide',
    'stick',
    'tour',
    'icy',
    'incandescent',
    'vengeful',
    'bore',
    'spare',
    'unbecoming',
    'agree',
    'unable',
    'apathetic',
    'sigh',
    'tip',
    'sky',
    'educated',
    'train',
    'example',
    'earthquake',
    'strap',
    'decorous',
    'foot',
    'hapless',
    'applaud',
    'substantial',
    'spotless',
    'spurious',
    'safe',
    'lace',
    'girl',
    'flight',
    'concerned',
    'oranges',
    'dislike',
    'excite',
    'sturdy',
    'head',
    'command',
    'angle',
    'ink',

]

var score = 0;
var timeLeft = 0;
var defaultTime = 10;
var timer = setInterval(countDown, 100);
var wordToType = ""

function randomWord() {
    wordToType = words[Math.floor(Math.random() * words.length)];
    document.getElementById('wordToType').innerHTML = wordToType;
}

function countDown() {
    if (timeLeft <= 0) {
        youLose();
    }
    else {
        timeLeft -= .1;
        timeLeft = timeLeft.toFixed(1);
        document.getElementById('timer').innerHTML = timeLeft + "s";
    }
}

function youLose() {
    alert("You lose!\n\nFinal Score: " + score)
    score = 0;
    init();    
}


function init() {
    randomWord();
    timeLeft = defaultTime;
    document.getElementById('score').innerHTML = score;
    document.getElementById('timer').innerHTML = timeLeft + "s";
    document.getElementById('input').addEventListener('change', function () {
        if (input.value == wordToType) {
            score++;
            randomWord();
        }
        document.getElementById('score').innerHTML = score;
        input.value = "";
    })

    countDown();
}