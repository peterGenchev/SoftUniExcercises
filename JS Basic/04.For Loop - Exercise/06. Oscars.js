function oscars (input){
    let name = input[0];
    let points = Number(input[1]);
    
  
    let result = 0;
    let inputL = input.length;
  
    for (let i = 3; i < inputL; i++){
        if(i % 2 !== 0){
            let morePoints = i + 1;
            let total = input[i].length * Number(input[morePoints]) / 2;
            points+=total;
        }
        if (points > 1250.5){
            break;
        }
        
    }
    if (points > 1250.5){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${(points).toFixed(1)}!`)
    }else {
        console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`)
    }
  
  }