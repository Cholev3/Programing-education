function inventory(arr) {

    let heroDataObj = [];

    for (let heroData of arr) {
        let [heroName, level, items] = heroData.split(" / ");

        let heroObj = {
            hero: heroName,
            level: Number(level),
            items: items
        };


        heroDataObj.push(heroObj);
    }


    heroDataObj.sort((a, b) => a.level - b.level);

    heroDataObj.forEach(obj => {
        console.log(`Hero: ${obj.hero}`);
        console.log(`level => ${obj.level}`);

        if (obj.items.trim() === "") {
            console.log("items => No items");
        } else {
            console.log(`items => ${obj.items}`);
        }
    })

}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
