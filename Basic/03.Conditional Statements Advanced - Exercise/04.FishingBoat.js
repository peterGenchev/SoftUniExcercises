function fishingBoat (input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]); 

    price = 0;
    switch (season){
        case "Summer":
        case "Autumn" :
            if (fishers <= 6){
                price = 4200 * 0.90;
            }else if ( fishers <= 11){
                price = 4200 * 0.85;
            }else if (fishers > 12){
                price = 4200 * 0.75;
            }break;
        case "Spring" :
            if (fishers <= 6){
                price = 3000 * 0.90;
            }else if (fishers <= 11){
                price = 3000 * 0.85;
            }else if (fishers > 12){
                price = 3000 * 0.75;
            }break;
        case "Winter" :
            if (fishers <= 6){
                price = 2600 * 0.90;
            }else if (fishers <= 11){
                price = 2600 * 0.85;
            }else if (fishers > 12){
                price = 2600 * 0.75;
            }break;

    }

    if (fishers % 2 === 0 && season !== "Autumn"){
        price = price * 0.95;
    }

    diff = Math.abs(budget - price);

    if (budget >= price){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }






}