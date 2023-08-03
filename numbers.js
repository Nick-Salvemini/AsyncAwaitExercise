let url = `http://numbersapi.com/`;

// 1
async function getNumFact(num) {
    let res = await $.getJSON(`${url}${num}?json`);
    console.log('Part 1.1: ', res.text)
}

getNumFact(3)

// 2
async function getNumFactWithArray(arr) {
    let res = await $.getJSON(`${url}${arr}?json`);
    console.log('Part 1.2: ', res)
}

getNumFactWithArray([3, 6, 9])

// 3
async function getFourNumFacts(num) {
    let factsArr = []
    let res = await Promise.all([
        $.getJSON(`${url}${num}?json`),
        $.getJSON(`${url}${num}?json`),
        $.getJSON(`${url}${num}?json`),
        $.getJSON(`${url}${num}?json`)
    ])

    console.log('Part 1.3: ', res[0].text, res[1].text, res[2].text, res[3].text)
}

getFourNumFacts(3)