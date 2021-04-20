// JavaScript for BlackJack
let game = {
    'you' : {'span' : '#yourResult', 'div' : '#yourBox', 'score' : 0},
    'dealer' : {'span' : '#dealerResult', 'div' : '#dealerBox', 'score' : 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A',],
    'cardsMap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'A':[1, 11],},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand' : false,
    'turnsOver' : false,
};

const YOU = game['you'];
const DEALER = game['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lostSound = new Audio('sounds/aww.mp3');

// HIT Button
document.querySelector('#hit').addEventListener('click', hit);

function hit() {
    if(game['isStand'] === false) {
        let cards = randomCard();
        showCard(cards,YOU);
        updateScore(cards, YOU);
        showScore(YOU);
    }    
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 10);
    return game['cards'][randomNumber];
}

function showCard(cards, activePlayer) {
    if(activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${cards}.png`;                                  // String Templating
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }    
}

function updateScore(cards, activePlayer) {
    if(cards === 'A'){
        // if adding 11 keeps me below 21, add 11..else add 1
       if(activePlayer['score'] + game['cardsMap'][cards][1] <= 21) {
        activePlayer['score'] += game['cardsMap'][cards][1];
        } else {
            activePlayer['score'] += game['cardsMap'][cards][0];
        }
    } else {
        activePlayer['score'] += game['cardsMap'][cards];
    }    
}

function showScore(activePlayer) {
    if(activePlayer['score'] > 21) {
        document.querySelector(activePlayer['span']).textContent = 'BUST';
        document.querySelector(activePlayer['span']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['span']).textContent = activePlayer['score'];
    }    
}

// DEAL Button
document.querySelector('#deal').addEventListener('click', deal);

function deal() {
    if(game['turnsOver'] === true) {

        game['isStand'] = false;

        let yourImages = document.querySelector('#yourBox').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealerBox').querySelectorAll('img');

        for(i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for(i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#yourResult').textContent = 0;
        document.querySelector('#dealerResult').textContent = 0;

        document.querySelector('#yourResult').style.color = 'white';
        document.querySelector('#dealerResult').style.color = 'white';

        document.querySelector('#bjResult').textContent = "Let's Play";
        document.querySelector('#bjResult').style.color = 'white';
    }
    
    game['turnsOver'] = true;
}

// STAND Button
document.querySelector('#stand').addEventListener('click', stand);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stand() {
    game['isStand'] = true;

    while(DEALER['score'] < 16 && game['isStand'] === true) {
        let cards = randomCard();
        showCard(cards, DEALER);
        updateScore(cards, DEALER);
        showScore(DEALER); 
        await sleep(500);
    }       

        game['turnsOver'] = true;
        showResult(decideWinner());
}

// Deciding Winner
function decideWinner() {
    let winner;

    // if You[score] is greater than equal to 21
    if(YOU['score'] <= 21) {
        // condition: dealer busts or dealer[score] is less than you[score]
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            game['wins']++;
            winner = YOU;

        // condition: dealer[score] > you[score]
        } else if(YOU['score'] < DEALER['score']) {
            game['losses']++;
            winner = DEALER;

        // condition: dealer[score] = you[score]    
        } else if(YOU['score'] === DEALER['score']) {
            game['draws']++;

        }

    } else if((YOU['score'] > 21) && (DEALER['score'] <= 21)) {
        game['losses']++;
        winner = DEALER;

    } else if((YOU['score'] > 21) && (DEALER['score'] > 21)) {
        game['draws']++;

    }

    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if(game['turnsOver'] === true) {
        if(winner === YOU) {
            document.querySelector('#wins').textContent = game['wins'];
            message = 'You Win!';
            messageColor = 'green';
            winSound.play();
        
        } else if(winner === DEALER) {
            document.querySelector('#losses').textContent = game['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            lostSound.play();

        } else {
            document.querySelector('#draws').textContent = game['draws'];
            message = 'You Drew!';
            messageColor = 'yellow';
        }

        document.querySelector('#bjResult').textContent = message;
        document.querySelector('#bjResult').style.color = messageColor;
    }    
}