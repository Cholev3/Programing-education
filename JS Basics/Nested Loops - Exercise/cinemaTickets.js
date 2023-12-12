function cinemaTickets(input) {
    let name = input[0];
    let freeSeats = input[1];
    let index = 1;
    let command = input[index];
    let student = 0;
    let kid = 0;
    let standard = 0;
    let ticketsPerMovie = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        index++
        command = input[index];
        let currentFreeSeats = freeSeats;
        while (command !== "End") {
            let currentTicket = command;
            ticketsPerMovie++
            if (currentTicket === "student") {
                student++
            } else if (currentTicket === "standard") {
                standard++
            } else if (currentTicket === "kid") {
                kid++
            }
            currentFreeSeats--
            if (currentFreeSeats <= 0) {
                break;
            }
            index++
            command = input[index];
        }
        let seatPercentage = (ticketsPerMovie / freeSeats) * 100
        console.log(`${name} - ${seatPercentage.toFixed(2)}% full.`);
        totalTickets += ticketsPerMovie;
        ticketsPerMovie = 0;
        index++

        name = input[index];
        if (name === "Finish") {
            command = input[index]
            break;
        }
        index++
        freeSeats = input[index];


    }
    if (command === "Finish") {
        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
        console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
        console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
    }

}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);