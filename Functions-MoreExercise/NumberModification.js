function modify(num){
    num = num.toString().split('').map(Number);
    while(true){
        let result = 0;
        for (let i of num) {
            result+=i;    
        } if(result/num.length<=5){
            num.push(9);
        } else{
            break;
        }
    }
    console.log(num.join(''));
}modify(101);