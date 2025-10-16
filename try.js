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
  { name: 'Jack', hasPet: true },
  { name: 'Jill', hasPet: false },
  { name: 'Alice', hasPet: true },
  { name: 'Bob', hasPet: false },
];

function hasPet(person) {
  return person.hasPet;
}

const peopleWithPets = people.filter(hasPet);
console.log(peopleWithPets);
