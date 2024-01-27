function lunchBreak (input){


    let tvSeries = input[0];
    let seriesDuration = Number(input[1]);
    let lunchDuration = Number(input[2]);

    let lunchTime = lunchDuration * 1/8;
    let restTime = lunchDuration * 1/4;
    let remainedTime = Math.abs(lunchDuration - lunchTime - restTime);
    let timeNeed = Math.abs(remainedTime - seriesDuration);

    if (remainedTime >= seriesDuration){
        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(timeNeed)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(timeNeed)} more minutes.`)
    }



}