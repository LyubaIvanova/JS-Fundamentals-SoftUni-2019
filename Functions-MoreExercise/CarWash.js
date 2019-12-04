function howCleanIsTheCar(arr){
    let clean = 0;
    for (let i of arr) {
        switch (i) {
            case 'soap': clean+=10;
                break;
            case 'water': clean+=(clean*0.2);
                break;
            case 'vacuum cleaner': clean+=(clean*0.25);
                break;
            case 'mud': clean-=(clean*0.1);
                break;
        }
    } console.log(`The car is ${clean.toFixed(2)}% clean.`);
} howCleanIsTheCar(['soap', 'soap','vacuum cleaner', 'mud', 'soap', 'water']);