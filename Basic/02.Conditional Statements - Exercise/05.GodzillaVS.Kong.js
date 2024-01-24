function godzillaVSKong (input){

    let filmBudget = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);

    let decor = filmBudget * 0.10;
    let clothingPrice = extras * clothing;

    if (extras > 150){
        clothingPrice = clothingPrice - (clothingPrice * 0.10);
    }
    
    let moneyNeed = decor + clothingPrice;
    let allmoney = Math.abs(filmBudget - moneyNeed);


    if (moneyNeed > filmBudget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${allmoney.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${allmoney.toFixed(2)} leva left.`);

    }
    

}