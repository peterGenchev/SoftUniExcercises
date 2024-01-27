function homework6(input) {
    let index = 0;
    let command = input[index];
    let studCount = 0;
    let standartCount = 0;
    let kidCOunt = 0;
    let totalTicketsCount = 0;

    while (command !== "Finish") {
        let name = command;
        index++;
        let freeSpace = input[index];
        index++
        let ticketType = input[index];
        let ticketCount = 0;

        while (ticketType !== "End") {
            ticketCount++;
            switch (ticketType) {
                case "student": studCount++; break;
                case "standard": standartCount++; break;
                case "kid": kidCOunt++; break
            }
            if (ticketCount >= freeSpace) {
                break;
            }
            ticketType = input[++index]
        }
        totalTicketsCount += ticketCount;
        let resultSingleFilm = ticketCount / freeSpace * 100

        console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`)
        command = input[++index]
    }
    console.log(`Total tickets: ${totalTicketsCount}`)
    console.log(`${(studCount / totalTicketsCount * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standartCount / totalTicketsCount * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidCOunt / totalTicketsCount * 100).toFixed(2)}% kids tickets.`)

}