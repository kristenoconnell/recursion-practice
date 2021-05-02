function factorial(number) {
    console.log("Forward phase", number);

    if (number <= 1) {
        console.log("base case", number)
        return 1;
    }

    const minusOneFactorial = factorial(number - 1);
    console.log("Backward phase", number, "*", minusOneFactorial);

    return number * minusOneFactorial;
};

console.log(factorial(5));