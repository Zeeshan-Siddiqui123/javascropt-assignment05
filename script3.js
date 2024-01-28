function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
  }
  
  const userName = prompt("Please enter your name:");
  const greeting = greetUser(userName);
  console.log(greeting)

  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  const userInput = prompt("Enter a number: ");
  const number = parseInt(userInput);
  
  const isNumberPrime = isPrime(number);
  
  console.log(`Is ${number} a prime number? ${isNumberPrime}`);