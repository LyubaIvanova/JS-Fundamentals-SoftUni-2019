function solve(input){
    let numbers = input.map(x => Number(x));
    let boxSize = input[0]*input[0]*6;
    let sheetsWithLessCoverage = Math.trunc(numbers[1]/3);
    let sheetsNormalCoverage = numbers[1] - sheetsWithLessCoverage;
    console.log(sheetsNormalCoverage);
    let oneSheetCovers = numbers[2];
    let totalCoverage = (sheetsNormalCoverage*oneSheetCovers)+(sheetsWithLessCoverage*(oneSheetCovers/4));
    let percentageCovered = (totalCoverage/boxSize)*100;
    console.log(`You can cover ${percentageCovered.toFixed(2)}% of the box.`);
}solve([ '2.5', '32', '4.25']);