function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    days = days - 1

    switch (room) {
        case "room for one person": price = 18;break;
        case "apartment":
            if (days < 10) {
                price = 25 * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = 25 * 0.65;
            } else {
                price = 25 * 0.50;
            }break;
        case "president apartment":
            if (days < 10) {
                price = 35 * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = 35 * 0.85;
            } else {
                price = 35 * 0.80;
            }break;


    }

    if (grade === "positive") {
        price = price * 0.25 + price
    } else {
        price = price * 0.90;
    }

    total = days * price;
    console.log(total.toFixed(2));
}