function solve(input) {
    let processedString = input[0];
    let letterCase = input[1];
    let totalSum = 0;
    const isLowerCase = (string) => /^[a-z]$/.test(string);
    const isUpperCase = (string) => /^[A-Z]$/.test(string);

    for (let char of processedString) {

        if (letterCase === 'LOWERCASE' && isLowerCase(char)) {
            totalSum += char.charCodeAt(0);
        } else if (letterCase === 'UPPERCASE' && isUpperCase(char)) {
            totalSum += char.charCodeAt(0);
        }
    }

    console.log(`The total sum is: ${totalSum}`);
}
solve(['AC/DC','UPPERCASE']);