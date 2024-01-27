function cleverLilly (input){
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let priceForOneToy = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            savedMoney += addedMoney;
            stolenMoney++;
            addedMoney+= 10;
        }else {
            toysCounter++
        }

        
    }
    let totalMoneyFromToys = toysCounter * priceForOneToy;
    let totalMoney = (savedMoney + totalMoneyFromToys) - stolenMoney   
    
    if (totalMoney < washingMachinePrice){
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`)
    }else {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`)
    }


}