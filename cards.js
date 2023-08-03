// 1
async function drawACard(num) {
    let res = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=${num}`);
    console.log(`Part 2.1: ${res.cards[0].value} of ${res.cards[0].suit}`)
}

drawACard(1)

// 2
async function drawTwoCards() {
    let draw1 = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
    let deckId = draw1.deck_id;
    let card1 = `${draw1.cards[0].value} of ${draw1.cards[0].suit}`
    let draw2 = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let card2 = `${draw2.cards[0].value} of ${draw2.cards[0].suit}`
    console.log(`Part 2.2: ${card1} and ${card2}`)
}

drawTwoCards()

//3
let deckId

async function shuffleDeck() {
    let shuffleDeck = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    let shuffleDeckId = shuffleDeck.deck_id;
    deckId = shuffleDeckId
}

shuffleDeck()

async function drawCard() {
    let draw = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let card = `${draw.cards[0].value} of ${draw.cards[0].suit}`;
    $(`<li>${card}</li>`).prependTo('#cardsList')
}

$('#drawACard').on('click', drawCard)