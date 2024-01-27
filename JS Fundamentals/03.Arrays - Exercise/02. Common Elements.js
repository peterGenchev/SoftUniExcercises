function array(firsArray, secondArray){

    for (const element of firsArray){
        if (secondArray.includes(element)){
            console.log(element);
        }
    }

}