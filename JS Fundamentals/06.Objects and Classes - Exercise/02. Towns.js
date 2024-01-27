function towns (input){
    let newObj = {}
    
    for (let el of input){
        let array = el.split(" | ");
        newObj.town = array[0];
        newObj.latitude = Number(array[1]).toFixed(2);
        newObj.longitude = Number(array[2]).toFixed(2);
        
        console.log(newObj)

    }

}