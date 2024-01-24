function vacationBooksList(input){

    let numPage = Number(input[0]);
    let pageForOneHour = Number(input[1]);
    let coundDay = Number(input[2]);

    let totalTime = numPage / pageForOneHour ;
    let res = totalTime / coundDay ;
    console.log(res)

}