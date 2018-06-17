const raindropSpeak = (input) => {
  // Verify inputs to be a non-zero integer number.
  if (typeof (input) !== 'number' || !Number.isInteger(input) || input === 0) {
    return undefined;
  }
  const primeFactors = primeFactorsOf(input);
  let result = '';
  if (primeFactors.indexOf(3) !== -1) {
    // If there is a 3 in the facotrs.
    result += 'Pling'
  }
  if (primeFactors.indexOf(5) !== -1) {
    // If there is a 5 in the facotrs.
    result += 'Plang'
  }
  if (primeFactors.indexOf(7) !== -1) {
    // If there is a 7 in the facotrs.        
    result += 'Plong'
  }
  if (result == '') {
    // If there the result does not contain 3,5 or 7      
    return input;
  }
  return result;
}

const primeFactorsOf = (number) => {
  let negativity;
  if (number < 0) {
    negativity = true;
    number = number * -1;
  }
  // Get the prime factors of a number.
  let factors = [], test = 2, result;
  while (number !== 1) {
    if (number % test === 0) {
      factors.push(test);
      number /= test;
    } else {
      test++;
    }
  }

  // Remove duplicates
  result = Array.from(new Set(factors));

  // If the number was negative
  if (negativity) {
    result.push(-1);
  }

  return result;
}

console.log('==============')
console.log('I am about to run this program on an input of 28.')
console.log('...Starting')
console.log('The resullt is: ', raindropSpeak(28));
console.log('...Goodbye')
console.log('==============')


module.exports = raindropSpeak;
