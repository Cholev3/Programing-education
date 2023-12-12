function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let site = 2; site < input.length; site++) {
        let currentTab = input[site];
        switch (currentTab) {
            case "Facebook":
                salary -= 150; break;
            case "Reddit":
                salary -= 50; break;
            case "Instagram":
                salary -= 100; break;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(Math.floor(salary));
    }

}
salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]);