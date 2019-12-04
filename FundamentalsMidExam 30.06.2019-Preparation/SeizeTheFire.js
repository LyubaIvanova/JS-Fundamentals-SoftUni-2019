function solve(input) {
    let water = Number(input[1]);
    let fires = input[0].split('#');
    let validCells = [];
    let totalEffort = 0;

    fires.forEach((fireLine) => {
        let [typeOfFire, cellValue] = fireLine.split(' = ');
        cellValue = Number(cellValue);
        let isValid = isFireValid(typeOfFire, cellValue);

        if (isValid && water >= cellValue) {
            water -= cellValue;
            totalEffort += cellValue * 0.25;
            validCells.push(cellValue);
        }
    });

    console.log('Cells:');
    if (validCells.length > 0) {
        let outputCells = validCells.map((cell) => ` - ${cell}`).join('\n');
        console.log(outputCells);
    }
     let totalFire = validCells.reduce((a, b) => a + b, 0);
    console.log(`Effort: ${totalEffort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

    function isFireValid(type, value) {
        if (type === 'High' && value >= 81 && value <= 125) {
            return true;
        }
        if (type === 'Medium' && value >= 51 && value <= 80) {
            return true;
        }
        if (type === 'Low' && value >= 1 && value <= 50) {
            return true;
        }
        return false;
    }

}
solve(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);