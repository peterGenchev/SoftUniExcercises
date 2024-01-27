function storeProvision (array1, array2){
    let newObj = {};

    for (let i = 0 ; i < array1.length; i+=2){
       let stock = array1[i];
        newObj[stock] = Number(array1[i+1]);
       
    }
    for (let i = 0 ; i < array2.length; i+=2){
        let stock = array2[i];
        if (!newObj.hasOwnProperty(stock)){
            newObj[stock] = Number(array2[i+1]);          
        }else {
           
            newObj[stock] += Number(array2[i+1])
        }  

    };
    for(let inStock in newObj){
        console.log(`${inStock} -> ${newObj[inStock]}`)
    }
}