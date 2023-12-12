function hotelRoom(input) {
    let month = input[0];
    let numOfDays = Number(input[1]);

    let apartment = 0;
    let studioPrice = 0;
    switch (month) {
        case "May":
            studioPrice = numOfDays * 50;
            apartmentPrice = numOfDays * 65;
            if (numOfDays > 7 && numOfDays<14) {
                studioPrice *= 0.95;
            }
            else if (numOfDays > 14) {
                studioPrice *= 0.70;
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            break;

        case "October":
            studioPrice = numOfDays * 50;
            apartmentPrice = numOfDays * 65;
            if (numOfDays > 7 && numOfDays<14) {
                studioPrice *= 0.95;
            }
            else if (numOfDays > 14) {
                studioPrice *= 0.70;
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            break;
            

        case "June":
            studioPrice = numOfDays * 75.20;
            apartmentPrice = numOfDays * 68.70;
            if (numOfDays > 14) {
                studioPrice *= 0.80;
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            
            break;
        case "September":
            studioPrice = numOfDays * 75.20;
            apartmentPrice = numOfDays * 68.70;
            if (numOfDays > 14) {
                studioPrice *= 0.80;
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            
            break;
        case "July":
            studioPrice = numOfDays * 76;
            apartmentPrice = numOfDays * 77;
            if (numOfDays > 14) {
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            
            break;
        case "August":
            studioPrice = numOfDays * 76;
            apartmentPrice = numOfDays * 77;
            if (numOfDays > 14) {
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            
            break;

    }
}
hotelRoom(["May", "15"]);