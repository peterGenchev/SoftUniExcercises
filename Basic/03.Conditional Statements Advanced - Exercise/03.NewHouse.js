function newHouse(input) {
    let flowers = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let num = 0;

    switch (flowers) {
        case "Roses":
            if (quantity > 80) {
                num = 5 * 0.9;
            } else {
                num = 5;
            }
            break;
        case "Dahlias":
            if (quantity > 90) {
                num = 3.80 * 0.85;
            } else {
                num = 3.80;
            }
            break;
        case "Tulips":
            if (quantity > 80) {
                num = 2.80 * 0.85;
            } else {
                num = 2.80;
            }
            break;
        case "Narcissus":
            if (quantity < 120) {
                num = 3 * 1.15;
            } else {
                num = 3;

            }
            break;
        case "Gladiolus":
            if (quantity < 80) {
                num = 2.50 * 1.20
            } else {
                num = 2.50;
            } 
            break;
    }
    let sum = quantity * num
    let diff = Math.abs(budget - sum)

    if (sum <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }



}