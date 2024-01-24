function repainting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thiner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint * 1.10) * 14.50;
    let thinerPrice = thiner * 5;
    let price = nylonPrice + paintPrice + thinerPrice + 0.40;
    let oneHourWork = price * 0.30;
    let oneDayWork = oneHourWork * workHours;
    let totalPrice = oneDayWork + price;
    console.log(totalPrice)

}
