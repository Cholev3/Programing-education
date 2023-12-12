function city(cityInfo) {

    let city = cityInfo;
    for (let keys of Object.keys(city)) {

        console.log(`${keys} -> ${city[keys]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

