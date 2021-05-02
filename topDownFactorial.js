function factorial(number, total=1) {
    console.log("forward phase", number, total)
    if (number <= 1) {
        console.log("Base case", number);
        return total;
    }

    total = factorial(number-1, total * number);
    console.log("backward phase", number, total);
    return total;
}

console.log(factorial(5));