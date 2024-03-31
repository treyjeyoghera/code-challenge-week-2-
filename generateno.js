const readline = require('readline');

//  generate Array function
function generateArray(start, end) {
  // Create an empty array to store the generated numbers
  const result = [];

  // Iterate from the start number to the end number,
  // adding each number to the result array
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  // Return the result array
  return result;
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get user input
rl.question('Enter the start number: ', function(startInput) {
  rl.question('Enter the end number: ', function(endInput) {
    // Convert the start and end input to numbers
    const start = Number(startInput);
    const end = Number(endInput);

    //  we are generateing the array of numbers between the start and end
    const array = generateArray(start, end);

    // Output the array
    console.log(array);

    // Close the readline interface
    rl.close();
  });
});