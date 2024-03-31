// we are using readline to interact with user
const readline = require('readline');

// we have created a function
function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
// we want to change the case
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

//  we created a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get user input
rl.question('Please enter a string: ', function(userInput) {
  // Swap the case of each character in the user input
  const swappedString = swapCase(userInput);

  // Output the swapped string
  console.log(swappedString);

  // Close the readline interface
  rl.close();
});