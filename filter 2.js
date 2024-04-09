const readline = require('readline');

// Function to filter prime numbers
function filterPrimes(numbers) {
  const primes = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 2) continue;
    let isPrime = true;
    for (let j = 2; j < number; j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(number);
    }
  }
  return primes;
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get user input
rl.question('Enter numbers separated by spaces: ', function(input) {
  // Split the input into an array of numbers
  const numbers = input.split(' ').map(Number);

  // Generate the array of prime numbers
  const primeNumbers = filterPrimes(numbers);

  // Output the prime numbers
  console.log('Prime numbers:', primeNumbers);

  // Close the readline interface
  rl.close();
});
