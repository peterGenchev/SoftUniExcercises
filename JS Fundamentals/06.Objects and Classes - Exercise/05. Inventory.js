function inventory (input){

    let heros = [];

    for (let heroInfo of input){
        let [name, level, items] = heroInfo.split(" / ");

        let currentHero = {
            name: name,
            level: +level,
            items: items
        };
        heros.push(currentHero)
    };
    let sortedByLevel = heros.sort((a,b)=>{
        return a.level - b.level;
    });

    for (const hero of sortedByLevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}