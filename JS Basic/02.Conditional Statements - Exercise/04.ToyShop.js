function toyShop (input){

    let excursioPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let sum = (puzzles * 2.60) + (talkingDolls * 3) + (teddyBears * 4.10) + (minions * 8.20) + (trucks * 2);
    toys = puzzles + talkingDolls + teddyBears + minions + trucks;
    
    if ( toys >= 50 ){
        sum = sum * 0.75
    }

    finalPrice = sum - toys;
    rent = sum * 0.10;
    profit = sum - rent;
    money = Math.abs(profit - excursioPrice);

    if (profit >= excursioPrice){
        console.log(`Yes! ${money.toFixed(2)} lv left.` )
    } else (
        console.log(`Not enough money! ${money.toFixed(2)} lv needed.`)
    )


}