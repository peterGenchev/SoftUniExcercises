function sumOfDigits (input){

    let numberAsString = input.toString();
    let sumOfAllDigits = 0;

    for (let i = 0; i < numberAsString.length; i++){
        let currNum = Number(numberAsString[i]);
        sumOfAllDigits += currNum;

    }
console.log(sumOfAllDigits)

}