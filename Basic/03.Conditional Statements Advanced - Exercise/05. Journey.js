function journey (input){
    let budget = Number(input[0]);
    season = input[1];

    if (budget <= 100){
        if (season ==="summer"){
            budget = budget * 0.30;
        }else if (season === "winter"){
            budget = budget * 0.70;
        }console.log(`Somewhere in Bulgaria`)
    }else if (budget <= 1000){
        if (season ==="summer"){
            budget = budget * 0.40;
        }else if (season === "winter"){
            budget = budget * 0.80;
        }console.log(`Somewhere in Balkans`)
    }else if (budget > 1000){
        budget = budget * 0.90
        console.log(`Somewhere in Europe`)
    }

    if (season === "summer" && budget <= 1000){
        console.log (`Camp - ${budget.toFixed(2)}`);
    }else if (season === "winter" && budget <= 1000){
        console.log(`Hotel - ${budget.toFixed(2)}`);
    }else {
        console.log(`Hotel - ${budget.toFixed(2)}`);
    }

}