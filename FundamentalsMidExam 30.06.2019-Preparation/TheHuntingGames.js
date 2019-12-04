'use strict'
function firstPart(input) {
    input = input.map(x => Number(x)).filter(x => x !== '');

    let days = input.shift();
    let players = input.shift();
    let groupsEnergy = input.shift();
    let waterPerDayPerPerson = input.shift();
    let foodPerDayPerPerson = input.shift();

    let water = waterPerDayPerPerson * days * players;
    let food = foodPerDayPerPerson * days * players;

    for (let day = 1; day <= days; day++) {
        let energy = input.shift();
        groupsEnergy -= energy;

        if (groupsEnergy <= 0) {
            break;
        }

        if (day % 2 === 0) {
            groupsEnergy *= 1.05;
            water *= 0.7;
        }

        if (day % 3 === 0) {
            groupsEnergy *= 1.1;
            food -= food / players;
        }
    }
    console.log(
        groupsEnergy <= 0
        ? `You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`
        : `You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`
    );
}
firstPart(['10',
    '7',
    '5035.5',
    '11.3',
    '7.2',
    '942.3',
    '500.57',
    '520.68',
    '540.87',
    '505.99',
    '630.3',
    '784.20',
    '321.21',
    '456.8',
    '330',
    ''
]);