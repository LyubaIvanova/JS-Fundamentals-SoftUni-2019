function solve(input){
    let map = new Map();
    let string = input[0];
    for(let indx in string){
        let temp = string[indx];

        if(!map.has(temp)){
            map.set(temp, [])
        }
        for(let char of string){
            if(char === temp){
                map.get(temp).push(indx);
                break;
            }
        }
    }
        
    for(let [key, value] of map){

        console.log(`${key}:${value.join('/')}`);
    }
}solve(['avjavamsdmcalsdm']);