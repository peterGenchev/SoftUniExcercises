function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let timeExam = examHour * 60 + examMinutes;
    let timeArrival = arrivalHour * 60 + arrivalMinutes;

    if (timeExam < timeArrival) {
        console.log("Late");
        let time = Math.abs(timeArrival - timeExam);
        if (time >= 60) {
            let h = Math.floor(time / 60);
            let minutes = time % 60;
            if (minutes < 10) {
                console.log(`${h}:0${minutes} hours after the start`);
            } else {
                console.log(`${h}:${minutes} hours after the start`);
            }
        } else {
            console.log(`${time} minutes after the start`)
        }
    } else if (timeArrival === timeExam || timeExam - timeArrival <= 30) {
        console.log("On time");
        let time = Math.abs(timeArrival - timeExam);
        if (time !== 0) {
            console.log(`${time} minutes before the start`)
        }


    } else {
        console.log("Early");
        let time = Math.abs(timeArrival - timeExam);
        if (time >= 60) {
            let h = Math.floor(time / 60);
            let minutes = time % 60;
            if (minutes < 10) {
                console.log(`${h}:0${minutes} hours before the start`);
            } else {
                console.log(`${h}:${minutes} hours before the start`);
            }
        } else {

            console.log(`${time} minutes before the start`);
        }

    }
}