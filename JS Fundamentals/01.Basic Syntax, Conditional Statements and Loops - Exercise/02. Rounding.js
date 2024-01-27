function rounding (number1, number2){

    number2 = Math.min(number2,15);

    let roundNum = parseFloat(number1.toFixed(number2));

    let formatNum = String(roundNum.replace(/(\.[0-9]*[1-9])0+$/, '$1'))

    console.log(formatNum)
}