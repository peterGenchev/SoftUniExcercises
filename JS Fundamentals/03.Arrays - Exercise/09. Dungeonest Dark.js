function dungeonestDark(array) {

    let health = 100;
    let coins = 0;
    let rooms = array[0].split('|');
    let bestRooms = 0 ;


    for (let i = 0; i < rooms.length; i++) {
        let item = rooms[i].split(" ");
        bestRooms++

        if (item[0] === "potion") {
            health += Number(item[1]);
            if (health >= 100) {
                let addedHealth = health - item[1];
                item[1] = Math.abs(addedHealth - 100);
                health = 100;
            }
            console.log(`You healed for ${item[1]} hp.`);
            console.log(`Current health: ${health} hp.`)
        } else if (item[0] === "chest") {
            coins += Number(item[1]);
            console.log(`You found ${item[1]} coins.`)
        } else {
            let monster = item[0];
            health -= Number(item[1]);
            if (health <= 0) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRooms}`)
                return;
            }
            console.log(`You slayed ${monster}.`);
        }

    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
    
}