function shopping (input){
    let budget = Number(input[0]);
    let vidCard = Number(input[1]);
    let procesor = Number(input[2]);
    let memory = Number(input[3]);
  
    let vidCardPrice = vidCard * 250;
    let procesorPrice = vidCardPrice * 0.35;
    let procesorSum = procesor * procesorPrice
    let memoryPrice = vidCardPrice * 0.10;
    let memorySum = memory * memoryPrice
    let money = vidCardPrice + procesorSum + memorySum;
  
    if (vidCard >= procesor){
      money = money * 0.85;
    }
  
    if (budget >= money){
    
    diff = Math.abs(money - budget);
    console.log (`You have ${diff.toFixed(2)} leva left!`)
    }else {
      diff = Math.abs(money - budget);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
  
  }