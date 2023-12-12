function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let vacationType;
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria"
    }
    else if (budget <= 1000) {
        destination = "Balkans";
    }
    else if (budget > 1000) {
        destination = "Europe";
    }
    switch (destination) {
        case "Bulgaria":
            if (season === "summer") {
                price = budget * 0.30;
                vacationType = "Camp";
            }
            else if (season === "winter") {
                price = budget * 0.70;
                vacationType = "Hotel";
            } break;
        case "Balkans":
            if (season === "summer") {
                price = budget * 0.40;
                vacationType = "Camp";
            }
            else if (season === "winter") {
                price = budget * 0.80;
                vacationType = "Hotel";
            } break;
        case "Europe":
            price = budget * 0.90;
            vacationType = "Hotel"; break;
    }


    console.log("Somewhere in" + " " + destination);
    console.log(`${vacationType} - ${price.toFixed(2)}`);
}
journey(["1500", "summer"]);