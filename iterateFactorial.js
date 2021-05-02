function factorial(number) {
    if (number <=1) {
        return 1;
    }

    let penultimate = 1;
    let total = 0;
    
    for (let ultimate = 1; ultimate <= number; ultimate++) {
        console.log(ultimate, "*", penultimate);
        total = ultimate * penultimate;
        penultimate = total;
    }
    return total;

}

console.log(factorial(10));