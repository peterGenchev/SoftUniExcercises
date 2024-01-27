function hotelRoom (input){
    let month = input[0];
    let nights = Number(input[1]);
    studio = 0;
    apartament = 0;

    if (month === "May" || month === "October"){
        if (nights > 7 && nights <= 14){
        studio = 50 * 0.95 ;
        apartament = 65 ;
        }else if(nights > 14){
            studio = 50 * 0.70;
        apartament = 65 ;
        }else {
            studio = 50 ;
        apartament = 65 ;
        }
    }else if (month === "June" || month === "September"){
        if (nights > 14){
            studio = 75.20 * 0.80 ;
        apartament = 68.70 ;
        }else {
        studio = 75.20 ;
        apartament = 68.70 ;
        }
    }else if  (month === "July" || month === "August"){
        studio = 76 ;
        apartament = 77 ;
    }

    

    if (nights > 14){
        apartament = apartament * 0.90;
    }

    aprtPrice = nights * apartament;
    studPrice = nights * studio;

    console.log(`Apartment: ${aprtPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studPrice.toFixed(2)} lv.`)



}