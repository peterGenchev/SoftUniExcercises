function printAndSum(start, end) {
    let sum = 0;
    let numbers = '';
    for (let i = start; i <= end; i++) {
        numbers += i + ' ';
        sum += i;
    }
    return `${numbers}\nSum: ${sum}`;
}