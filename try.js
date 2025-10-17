/**
 Challenge: Add a button that, when clicked, gets a new deck of cards from the deckofcards API
 
 URL: https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/
 
 Log the whole response to the console
 */

// const handleClick = () => {
//   fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

function handleClick() {
  fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// document.getElementById('deck').addEventListener('click', handleClick);

function callback() {
  console.log('I run after 3 seconds');
}

setTimeout(callback, 3000);

/**
 * Challenge:
 *
 * Part 1: Given the array of objects below, create a new array with the `.filter()` array method that contains only the objects where "hasPet" is true
 *
 *
 * Part 2: Move the anonymous in-line function to its own, named function
 */

const people = [
  { name: 'Jack', hasPet: true, age: 12 },
  { name: 'Jill', hasPet: false, age: 18 },
  { name: 'Alice', hasPet: true, age: 22 },
  { name: 'Bob', hasPet: false, age: 32 },
];
function hasPet(person) {
  return person.hasPet;
}

const peopleWithPets = people.filter(hasPet);
console.log(peopleWithPets);

/**
 * Extra challenge to practice array.filter:
 *
 * Using .filter, create a new array of people who are 18 and older
 * (should be Jill, Alice, and Bob)
 */

const people18Plus = people.filter((p) => p.age >= 18);
console.log(people18Plus);

/**
 * Challenge:
 *
 * Write your own `filter` function! Don't worry about adding it to the prototype of arrays or anything.
 * This function should take 2 parameters:
 * 1. The array you want to filter through, and
 * 2. A callback function
 *
 * Steps for filterArray function logic:
 * 1. Initialize a new, empty array which will be returned at the end of the `filterArray`s operations (Completed ✅)
 * 2. Loop through the array passed as the 1st parameter
 * 3. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
 * 4. If the callback function returns `true`, push the current item you're iterating on in the loop to the new array. If it returns `false`, don't push it to the array.
 * 5. When the loop is over, return the new array
 */

const people2 = [
  { name: 'Jack', hasPet: true },
  { name: 'Jill', hasPet: false },
  { name: 'Alice', hasPet: true },
  { name: 'Bob', hasPet: false },
];

// function filterArray(array, callback) {
//   const resultingArray = [];
//   // Write your filtering logic here
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       resultingArray.push(array[i]);
//     }
//   }
//   return resultingArray;
// }

function filterArray(array, callback) {
  const resultingArray = [];
  // Write your filtering logic here
  for (let item of array) {
    if (callback(item)) {
      resultingArray.push(item);
    }
  }
  return resultingArray;
}

// We'll do this later
// const peopleWithPets = filterArray(people, /*???*/)

const peopleWithPets2 = filterArray(people2, (person) => person.hasPet);

console.log(peopleWithPets2);

/**
 * Challenge: method chaining!
 *
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 *
 *  2. Given the array below, chain the `.filter` and `.map` array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console
 */

// document.getElementById('deck').addEventListener('click', handleClick);

const voters = [
  { name: 'Joe', email: 'joe@joe.com', voted: true },
  { name: 'Jane', email: 'jane@jane.com', voted: true },
  { name: 'Bo', email: 'bo@bo.com', voted: false },
  { name: 'Bane', email: 'bane@bane.com', voted: false },
];

const personVoted = voters
  .filter((p) => p.voted)
  .map((e) => e.email)
  .forEach((d) => console.log(d));
// console.log(personVoted)

const promise = fetch(
  'https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/'
);
console.log(promise); // promise
const promise2 = promise.then((res) => res.json());
console.log(promise2); //promise

fetch('https://apis.scrimba.com/bored/api/activity')
  .then(function (res) {
    return 'Hello'; //has to return something to print in the next then
  })
  .then(function (whatever) {
    console.log(whatever);
    return 'World!'; //has to return something to print in the next then
  })
  .then(function (anything) {
    console.log(anything);
  });

/**
 * Challenge
 *
 * Background:
 * The Deck of Cards API expects us to provide the deck id
 * of the deck we're playing with so it can remember which
 * cards we've already drawn, how many are remaining in the
 * deck, etc.
 *
 * Task: save the deck_id from the returned data to a local
 * variable so we can use it later
 */

let deckId;
let computerScore = 0;
let myScore = 0;

const newDeckBtn = document.getElementById('new-deck');
const drawCardBtn = document.getElementById('draw-cards');
const cardsContainer = document.getElementById('cards');
const computerScoreEl = document.getElementById('computer-score');
const myScoreEl = document.getElementById('my-score');

async function handleNewDeck() {
  drawCardBtn.disabled = true;

  try {
    const res = await fetch(
      'https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/'
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    deckId = data.deck_id;
    console.log('deckId:', deckId);
    console.log(data);
    computerScore = 0;
    myScore = 0;
    computerScoreEl.textContent = `Computer score: ${computerScore}`;
    myScoreEl.textContent = `My score: ${myScore}`;
    drawCardBtn.disabled = false;

    cardsContainer.innerHTML = `
  <div class="card-slot"></div>
  <div class="card-slot"></div>
`;

    document.getElementById('header').textContent = `Let's Begin, Draw Cards!`;

    console.log(data.remaining);
    remaining.textContent = `Cards Remaining: ${data.remaining}`;
  } catch (error) {
    console.error('There was problem:', error);
    alert('Failed to create a new deck. Please Try again!');
  }
}

newDeckBtn.addEventListener('click', handleNewDeck);

async function handleDraw() {
  let data;
  try {
    const res = await fetch(
      `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
    );
    if (!res.ok) throw new Error(`HTTP error! status:',${res.status}`);
    data = await res.json();
    console.log(data.cards);
    console.log(data.remaining);

    cardsContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class='card'>`;
    cardsContainer.children[1].innerHTML = `<img src=${data.cards[1].image} class='card'>`;

    remaining.textContent = `Cards Remaining: ${data.remaining}`;

    const card1 = data.cards[0];
    const card2 = data.cards[1];

    const winnerText = theWinnerIs(card1, card2);
    header.textContent = winnerText;
  } catch (error) {
    console.error('There was an error:', error);
  } finally {
    if (data.remaining === 0) {
      drawCardBtn.disabled = true;
      alert('Deck is empty! Shuffle a new deck.');
      if (computerScore > myScore) {
        header.textContent = `You LOSE The Game, Try Again!!`;
      } else if (computerScore < myScore) {
        header.textContent = `Congratulations, You WON The Game!!`;
      } else {
        header.textContent = `War CONTINUE!!`;
      }
    }
  }
}

drawCardBtn.addEventListener('click', handleDraw);

function theWinnerIs(card1, card2) {
  const valueOptions = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'JACK',
    'QUEEN',
    'KING',
    'ACE',
  ];
  const card1ValueIndex = valueOptions.indexOf(card1.value);
  const card2ValueIndex = valueOptions.indexOf(card2.value);

  if (card1ValueIndex > card2ValueIndex) {
    computerScore++;
    computerScoreEl.textContent = `Computer score: ${computerScore}`;

    return 'Computer Win!';
  } else if (card1ValueIndex === card2ValueIndex) {
    return `It's a WAR!!`;
  } else {
    myScore++;
    myScoreEl.textContent = `My score: ${myScore}`;
    return 'You Win!';
  }
}
