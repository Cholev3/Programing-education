function foreignLanguages(country) {
    switch (country) {
        case "USA":
        case "England": console.log("English"); break;
        case "Spain":
        case "Mexico":
        case "Argentina": console.log("Spanish"); break;
        default: console.log("unknown"); break;
    }

}
foreignLanguages("USA")
foreignLanguages("England")
foreignLanguages("Spain")
foreignLanguages("Mexico")
foreignLanguages("Bulgaria")