
let div = document.querySelector('#div_0');

function clickCounter() {
    ++div.innerHTML;
};

counter.addEventListener('click', function () {
    clickCounter();
});

let isWhite = true;
let isYellow = true;

function clickBackgroundColor() {
    if (isWhite) {
        isWhite = false;
        div.style.backgroundColor = 'yellow';
    } else if (isYellow) {
        isYellow = false;
        div.style.backgroundColor = 'orange';
    } else {
        isWhite = true;
        isYellow = true;
        div.style.backgroundColor = 'white';
    };
};

background.addEventListener('click', function () {
    clickBackgroundColor();
});


let i = 16;

function clickTextSizeMax() {
    if (i < 32) {
        i++;
        div.style.fontSize = `${i}px`;
    };
};

function clickTextSizeMin() {
    if (i > 9) {
        i--;
        div.style.fontSize = `${i}px`;
    };
};

textSizeMax.addEventListener('click', function () {
    clickTextSizeMax();
});

textSizeMin.addEventListener('click', function () {
    clickTextSizeMin();
});










