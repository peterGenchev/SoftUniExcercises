function makeADictionary(input) {
    let dict = new Map()
    input.forEach(element => {
        let jsonObj = JSON.parse(element);
        let term = Object.keys(jsonObj)[0];
        let description = Object.values(jsonObj)[0];

        dict.set(term, description);


    });


    let mapAsc = new Map([...dict.entries()].sort());
    for (const [key, value] of mapAsc.entries()) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }
}