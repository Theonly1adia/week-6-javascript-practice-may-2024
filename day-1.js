let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.

  playerOne.age = prompt ("What is your age?");
  playerOne.sign = prompt("What is your sign?");

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Your astrological sign is ${playerOne.sign}. Can you beat your hi score of ${playerOne.hiScore}?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let playerTwo = {};
  playerTwo.name = prompt("What is your name?");
  playerTwo.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  
  playerTwo.phoneNumber = prompt("What is your phone number");

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${playerTwo.name}! Your current address is ${playerTwo.address}. Your current phone number is ${playerTwo.phoneNumber}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};

  // TODO: create a prompt to ask about a pet
  
  pet.name = prompt ("What is your pet's name?");
  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Your pets name is ${pet.name}.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  let playerThree;
  playerThree = {};

  playerThree.name = prompt ("What is your name?");

  let childOne;
  childOne = {};
  childOne.name = prompt ("What is your child's name?");

  messageParagraph.innerHTML = `Hi, ${playerThree.name}. Your childs name is ${childOne.name}.`




  
}

part4.onclick = day1Part4;