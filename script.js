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

function randomWord() {
    wordToType = words[Math.floor(Math.random() * words.length)];
}

var wordToType = ""
randomWord();
var score = 0;

function init() {
    document.getElementById('wordToType').innerHTML = wordToType;
    document.getElementById('score').innerHTML = score;
    document.getElementById('input').addEventListener('change', function () {
        if (input.value == wordToType) {
            score++;
            randomWord();
        }
        document.getElementById('score').innerHTML = score;
        document.getElementById('wordToType').innerHTML = wordToType;
        input.value = "";
    })
}