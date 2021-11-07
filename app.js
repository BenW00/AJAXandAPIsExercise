// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// Question 1A
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`)

// Question 1B
p1.innerText = jokeJS1[`setup`]

// Question 1C
p2.innerText = jokeJS1[`punchline`]

// Question 2A
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

// Question 2B
    .then(res => {
        const friendsJS2 = res
    // Question 2C
        p3.innerText = (friendsJS2.data[`character`])
        p4.innerText = (friendsJS2.data[`quote`])
    })
    // Question 2D
    .catch(err => {
        console.log(err);
    })

// Question 3A
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

    // Question 3B
    .then(async function quoteFunc (res){
        const quoteJS3 = res
        // Question 3C
        p5.innerText = quoteJS3.data[`character`]
        p6.innerText = quoteJS3.data[`quote`]
    })
    // Question 3D
    .catch(res => {
        console.log(res)
    })

// Question 4A
async function tvMazeFunc() {
    try {
        const lastEP = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`)
        p7.innerText = lastEP.data[`name`]
    }
    catch (err) {
        console.log(err)
    }
}
tvMazeFunc()

// BONUS

// Question 5A
const image = document.createElement(`img`);
fourth.after(image)

axios.get(`https://pokeapi.co/api/v2/pokemon/25`)
    .then (res => {
        const pokiReturn = res.data
        image.src = (pokiReturn.sprites[`front_shiny`])
    })
    .catch (err => {
        console.log(err)
    })