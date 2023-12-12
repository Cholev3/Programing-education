function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;
    let totalSeats = rows * columns;

    switch (projectionType) {
        case "Premiere": income = totalSeats * 12;
            console.log(income.toFixed(2));
            console.log("leva"); break;
        case "Normal": income = totalSeats * 7.50;
            console.log(income.toFixed(2));
            console.log("leva"); break;
        case "Discount": income = totalSeats * 5;
            console.log(income.toFixed(2));
            console.log("leva"); break;

    }


}
cinema(["Discount",
    "12",
    "30"]);