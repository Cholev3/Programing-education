function gladiatorExpenses(lostFights, helmet, sword, shield, armor) {
    let fightCounter = 0;
    let helmetBreaks = 0;
    let swordBreaks = 0;
    let shieldBreaks = 0;
    let armorBreaks = 0;
    for (let i = 0; i < lostFights; i++) {
        fightCounter++;
        if (fightCounter % 2 == 0) {
            helmetBreaks++
        }
        if (fightCounter % 3 == 0) {
            swordBreaks++
        }
        if (fightCounter % 2 == 0 && fightCounter % 3 == 0) {
            shieldBreaks++
            if (shieldBreaks % 2 == 0) {
                armorBreaks++
            }
        }

    }

    let helmetCost = helmetBreaks * helmet;
    let swordCost = swordBreaks * sword;
    let shieldCost = shieldBreaks * shield;
    let armorCost = armorBreaks * armor;
    let totalCost = (helmetCost + swordCost + shieldCost + armorCost).toFixed(2);
    console.log(`Gladiator expenses: ${totalCost} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);