function employees(array) {


    let newObj = {}
    for (let ime of array) {
        newObj.name = ime;
        newObj.number = ime.length;

        console.log(`Name: ${newObj.name} -- Personal Number: ${ime.length}`)

    }


}