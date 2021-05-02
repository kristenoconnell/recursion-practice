function split(text, separator){
    let index = text.indexOf(separator);

    if (index === -1) {
        return [text];
    }

    let start = text.substring(0, index);
    let rest = text.substring(index + 1);
    
    let solution = split(rest, separator);

    solution.unshift(start);

    return solution;

}

console.log(split("Have a great day!", " "));