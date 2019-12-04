function printHelix(num){
    let sequence = ['A','T','C','G','T','T','A','G','G','G'];
    let counter = 0;
        while(counter<num){
            let pushed = [];
            console.log(`**${sequence[0]}${sequence[1]}**`);
            pushed.push(sequence[0],sequence[1]);
            sequence.shift();
            sequence.shift();
            counter++;
            if(counter>=num){
                break;
            }
            console.log(`*${sequence[0]}--${sequence[1]}*`);
            pushed.push(sequence[0],sequence[1]);
            sequence.shift();
            sequence.shift();
            counter++;
            if(counter>=num){
                break;
            }
            console.log(`${sequence[0]}----${sequence[1]}`);
            pushed.push(sequence[0],sequence[1]);
            sequence.shift();
            sequence.shift();
            counter++;
            if(counter>=num){
                break;
            }
            console.log(`*${sequence[0]}--${sequence[1]}*`);
            pushed.push(sequence[0],sequence[1]);
            pushed.unshift(sequence[2],sequence[3]);
            sequence.shift();
            sequence.shift();
            sequence.shift();
            sequence.shift();
            for (let i of pushed) {
                sequence.push(i);
            }
            counter++;
    }
}printHelix(10);