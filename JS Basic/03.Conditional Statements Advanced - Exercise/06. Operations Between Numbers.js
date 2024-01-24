function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let opp = input[2];
    result = 0;

    switch (opp) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n1 / n2; break;
        case "%": result = n1 % n2; break;

    }

    if (opp === "+" || opp === "-" || opp === "*") {
        if (result % 2 == 0) {
            console.log(`${n1} ${opp} ${n2} = ${result} - even`)
        } else {
            console.log(`${n1} ${opp} ${n2} = ${result} - odd`)
        }
    } else if (opp === "/") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
        }
    } else if (opp === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        }else {
            console.log(`${n1} % ${n2} = ${result}`)
        }
    }



}