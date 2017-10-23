
let raindropSpeak = (input) => {
    // Verify inputs
    if(typeof(input) != 'number') {
        return undefined;
    }
    if(input <= 0) {
        return undefined;
    }

    let primeFactors = primeFactorsOf(input);
    let result = '';

    if(primeFactors.indexOf(3) !== -1) {
        // If there is a 3 in the facotrs.
        result += 'Pling'
    }

    if(primeFactors.indexOf(5) !== -1) {
        // If there is a 5 in the facotrs.
        result += 'Plang'
    }

    if(primeFactors.indexOf(7) !== -1) {
        // If there is a 7 in the facotrs.        
        result += 'Plong'
    }

    if(result == '') {
        // If there the result does not contain 3,5 or 7      
        return input;
    } 
    
    return result;
}

let primeFactorsOf = (number) => {
    // Get the prime factors of a number.
    let factors = [], test = 2, result;
    while(number !== 1) {
        if(number % test === 0) {
            factors.push(test);
            number /= test;
        } else {
            test++;
        }
    }

    // Remove duplicates
    result = Array.from(new Set(factors));
    return result;
}

console.log(raindropSpeak(28));

module.exports = raindropSpeak;