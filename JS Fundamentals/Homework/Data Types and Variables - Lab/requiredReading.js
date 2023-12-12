function requiredReading(pages, pagesPerHour, days) {
    let totalRedingTime = pages / pagesPerHour;
    let readingPerDay = totalRedingTime / days;
    console.log(readingPerDay);
}
requiredReading(212, 20, 2);