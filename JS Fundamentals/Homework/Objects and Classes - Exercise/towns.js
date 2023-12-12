function towns(arr) {

    for (let token of arr) {
        let [town, latitude, longitude] = token.split(' | ');
        let cityInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(cityInfo);
    }


}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);