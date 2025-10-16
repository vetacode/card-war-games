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
