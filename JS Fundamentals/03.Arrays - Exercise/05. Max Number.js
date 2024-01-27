function maxNumber(array) {

    let newArray = [];
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        let numberOne = array[i];
        let isLargest = true;

        for (let j = i + 1; j < arrayL; j++) {
            ;

            let numberTwo = array[j];

            if (numberOne <= numberTwo) {
                isLargest = false;
            }


        }
        if (isLargest) {
            newArray.push(numberOne)
        }

    }

    console.log(newArray.join(" "))

}