var score, roundScore, activeplayer, isplayimg, lastDice;
init();
// document.querySelector('#current--' + activeplayer).textContent = dice;
// let x = document.querySelector('#score--0').textContent;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', () => {
    if (isplayimg) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        if (dice === 6 && lastDice === 6) {
            score[activeplayer] = 0;
            document.querySelector('#score--' + activeplayer).textContent = '0';
            nextPLayer();
        }
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current--' + activeplayer).textContent = roundScore;
        }
        else {
            nextPLayer();
        }
        lastDice = dice;
    }
});


document.querySelector('.btn--hold').addEventListener('click', () => {
    if (isplayimg) {
        score[activeplayer] += roundScore;
        document.querySelector('#score--' + activeplayer).textContent = score[activeplayer];

        var input = document.querySelector('.finalScore').value;
        var winnerScore;

        if (input) {
            winnerScore = input
        }
        else {
            winnerScore = 100;
        }

        if (score[activeplayer] >= winnerScore) {
            document.querySelector('#name--' + activeplayer).textContent = 'Winner!👑';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activeplayer).classList.add('player--winner');
            document.querySelector('.player--' + activeplayer).classList.remove('active');
            isplayimg = false;
        }
        else {
            nextPLayer();
        }
    }
});


function nextPLayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundScore = 0;
    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn--new').addEventListener('click', init);
function init() {
    score = [0, 0];
    roundScore = 0;
    activeplayer = 0;
    isplayimg = true;
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.finalScore').value = '';
    document.querySelector('.finalScore').ariaPlaceholder = 'Final Score';
}