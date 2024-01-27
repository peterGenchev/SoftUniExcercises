function basketballEquipment(input){

    let yearPrice = Number(input[0])


    let sneakers = yearPrice * 0.60;
    let clothes = sneakers * 0.80;
    let ball = clothes / 4;
    let accesoaries = ball / 5;
    let price = yearPrice + sneakers + clothes + ball + accesoaries;
    console.log(price)
}