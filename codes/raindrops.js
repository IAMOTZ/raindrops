let primeFactorsOf = (number) => {
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
        result += 'Pling'
    }

    if(primeFactors.indexOf(5) !== -1) {
        result += 'Plang'
    }

    if(primeFactors.indexOf(7) !== -1) {
        result += 'Plong'
    }
    if(result == '') {
        return input;
    } 
    
    return result;
}

module.exports = raindropSpeak;