function tradeCommissions(input) {
    let city = input[0];
    let salesVolume = Number(input[1]);
    let commission = 0;

    if (city === "Sofia" && 0 <= salesVolume && salesVolume <= 500) {
        commission = salesVolume * 0.05;
        console.log(commission.toFixed(2));
    }
    else if (city === "Sofia" && 500 < salesVolume && salesVolume <= 1000) {
        commission = salesVolume * 0.07;
        console.log(commission.toFixed(2));
    }
    else if (city === "Sofia" && 1000 < salesVolume && salesVolume <= 10000) {
        commission = salesVolume * 0.08;
        console.log(commission.toFixed(2));
    }
    else if (city === "Sofia" && salesVolume > 10000) {
        commission = salesVolume * 0.12;
        console.log(commission.toFixed(2));
    }
    else if (city === "Varna" && 0 <= salesVolume && salesVolume <= 500) {
        commission = salesVolume * 0.045;
        console.log(commission.toFixed(2));
    }
    else if (city === "Varna" && 500 < salesVolume && salesVolume <= 1000) {
        commission = salesVolume * 0.075;
        console.log(commission.toFixed(2));
    }
    else if (city === "Varna" && 1000 < salesVolume && salesVolume <= 10000) {
        commission = salesVolume * 0.1;
        console.log(commission.toFixed(2));
    }
    else if (city === "Varna" && salesVolume > 10000) {
        commission = salesVolume * 0.13;
        console.log(commission.toFixed(2));
    }
    else if (city === "Plovdiv" && 0 <= salesVolume && salesVolume <= 500) {
        commission = salesVolume * 0.055;
        console.log(commission.toFixed(2));
    }
    else if (city === "Plovdiv" && 500 < salesVolume && salesVolume <= 1000) {
        commission = salesVolume * 0.08;
        console.log(commission.toFixed(2));
    }
    else if (city === "Plovdiv" && 1000 < salesVolume && salesVolume <= 10000) {
        commission = salesVolume * 0.12;
        console.log(commission.toFixed(2));
    }
    else if (city === "Plovdiv" && salesVolume > 10000) {
        commission = salesVolume * 0.145;
        console.log(commission.toFixed(2));
    }
    else {
        console.log("error");

    }
}
tradeCommissions(["Sofia", "-5"]);