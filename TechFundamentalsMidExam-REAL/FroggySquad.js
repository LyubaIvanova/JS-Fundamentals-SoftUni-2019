function solve(params){
    let frogs = params.shift().split(' ');
    for(let line of params){
        let tokens = line.split(' ');
        let command = tokens[0];
         
        if(command === 'Join'){
            let name = tokens[1];
            join(name);
        }
        else if(command === 'Jump'){
            let name = tokens[1];
            let index = Number(tokens[2]);
            jump(name, index);
        }
        else if(command === 'Dive'){
            let index = Number(tokens[1]);
            dive(index);
        }
        else if(command === 'First'){
            let count = Number(tokens[1]);
            printFirst(count);
        }
        else if(command === 'Last'){
            let count = Number(tokens[1]);
            printLast(count);
        }
        else if(command === 'Print'){
            if(tokens[1] === 'Normal'){
                console.log(`Frogs: ${frogs.join(' ')}`);
                break;
            }
            else{
                console.log(`Frogs: ${frogs.reverse().join(' ')}`);
                break;
            }
        }
    }

    function join(name){
        frogs.push(name);
    }

    function jump(name, index){
        if(index >=0 && index <= frogs.length){
            frogs.splice(index, 0, name);
        }
    }

    function dive(index){
        if(index >=0 && index < frogs.length){
            frogs.splice(index, 1);
        }
    }

    function printFirst(count){
        if(count > frogs.length){
            console.log(frogs.join(' '));
        }
        else{
            let sliced = frogs.slice(0, count);
            console.log(sliced.join(' '));
        }
    }

    function printLast(count){
        if(count > frogs.length){
            console.log(frogs.join(' '));
        }
        else{
            let sliced = frogs.slice(-count);
            console.log(sliced.join(' '));
        }
    }

}solve([ 'A B C D E F',
'Join G',
'Jump Q 3',
'Last 3',
'Dive 2',
'Print Normal' ]

    );