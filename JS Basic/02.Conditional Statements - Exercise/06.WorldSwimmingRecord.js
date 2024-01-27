function worldSwimmingRecord (input){
    let recordSec = Number(input[0]);
    let distMeter = Number(input[1]);
    let timeSec = Number(input[2]);

    let delay = Math.floor(distMeter / 15);
    let delayInSec = delay * 12.5;
    
    let time = distMeter * timeSec + delayInSec

    if (time < recordSec){
        
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
        
    }else{
        let diff = Math.abs(recordSec - time);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}