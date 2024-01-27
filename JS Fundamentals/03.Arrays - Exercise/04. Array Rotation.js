function arrayRotation (array, rotatons){

    while(rotatons > 0){
        let elementMove = array.shift();
        array.push(elementMove);
        rotatons--;
    }
 console.log(array.join(" "))
}