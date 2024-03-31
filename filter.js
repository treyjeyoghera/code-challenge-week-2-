const readline = require('readline');

//  the filter is used Primes function
function filterPrimes(numbers) {
  // Create an empty array to store the prime numbers
  const primes = [];

  // Iterate through the input array
  for (let i = 0; i < numbers.length; i++) {
    // Get the current number
    const number = numbers[i];

    // Check if the number is less than 2
    if (number < 2) continue;

    // Check if the number is prime
    let isPrime = true;
    for (let j = 2; j < number; j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }

    // If the number is prime, add it to the array of primes
    if (isPrime) {
      primes.push(number);
    }
  }

  // Return the array of primes
  return primes;
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get user input
rl.question('Enter the numbers 1 to 10, separated by spaces: ', function(input) {
  // Split the input into an array of numbers
  const numbers = input.split(' ').map(Number);

  // Check if the input contains all the numbers 1 to 10
  if (numbers.length !== 10) {
    console.log('Please enter the numbers 1 to 10, separated by spaces.');
    rl.close();
    return;
  }

  // Generate the array of prime numbers
  const primeNumbers = filterPrimes(numbers);

  // Output the prime numbers
  console.log(primeNumbers);

  // Close the readline interface
  rl.close();
});