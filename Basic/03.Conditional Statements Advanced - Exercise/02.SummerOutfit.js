function summerOutfit(input) {

    let degrees = Number(input[0]);
    let dayTime = input[1];

    let outfit = 0;
    let shoes = 0;


    if (degrees >= 10 && degrees <= 18) {
        if (dayTime === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (dayTime === "Afternoon" || dayTime === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins"
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (dayTime === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayTime === "Evening" || dayTime === "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees >= 25) {
        if (dayTime === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayTime === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (dayTime === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}