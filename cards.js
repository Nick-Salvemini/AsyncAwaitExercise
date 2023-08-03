// 1
async function drawACard(num) {
    let res = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=${num}`);
    console.log(`${res.cards[0].value} of ${res.cards[0].suit}`)
}

// drawACard(1)

// 2
async function drawTwoCards() {
    let draw1 = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
    let deckId = draw1.deck_id;
    let card1 = `${draw1.cards[0].value} of ${draw1.cards[0].suit}`
    let draw2 = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let card2 = `${draw2.cards[0].value} of ${draw2.cards[0].suit}`
    console.log(`${card1} and ${card2}`)
}

// drawTwoCards()

//3
let deckId

async function shuffleDeck() {
    let shuffleDeck = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    let shuffleDeckId = shuffleDeck.deck_id;


    deckId = shuffleDeckId

    console.log(shuffleDeckId)
    console.log(deckId)
}

shuffleDeck()



async function drawCard() {
    let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    console.log(`${card.cards[0].value} of ${card.cards[0].suit}`)
}

$('#drawACard').on('click', drawCard())