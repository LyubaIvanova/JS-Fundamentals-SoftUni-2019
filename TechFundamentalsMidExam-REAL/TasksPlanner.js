function solve(input){
    let tasks = input.shift().split(' ').map(x => Number(x));
    
    for(let line of input){
        if(line === 'End'){
            let incompleted = [];
            for(let el of tasks){
                if(el > 0){
                    incompleted.push(el);
                }
            }
            console.log(incompleted.join(' '));
            break;
        }
        let tokens = line.split(' ');
        let command  = tokens[0];

        if(command === 'Complete'){
            let completeOnIndex = Number(tokens[1]);
            complete(completeOnIndex);
        }
        else if(command === 'Change'){
            let index = Number(tokens[1]);
            let time = Number(tokens[2]);
            change(index, time);
        }
        else if(command === 'Drop'){
            let index = Number(tokens[1]);
            drop(index);
        }
        if(tokens[1] === 'Completed'){
           countCompleted(tasks);
        }
        else if(tokens[1] === 'Incomplete'){
            countIncompleted(tasks);
        }
        else if(tokens[1] === 'Dropped'){
            countDropped(tasks);
        }
    }

    function complete(index){
        if(index >= 0 && index < tasks.length){
            tasks[index] = 0;
        }
    }

    function change(index, time){
        if(index >= 0 && index < tasks.length){
            tasks[index] = time;
        }
    }

    function drop(index){
        if(index >= 0 && index < tasks.length){
            tasks[index] = -1;
        }
    }

    function countCompleted(input){
        let counter = 0;
        for(let el of input){
            if(el === 0){
                counter++;
            }
        }
        console.log(counter);
    }

    function countIncompleted(input){
        let counter = 0;
        for(let el of input){
            if(el > 0){
                counter++;
            }
        }
        console.log(counter);
    }

    function countDropped(input){
        let counter = 0;
        for(let el of input){
            if(el === -1){
                counter++;
            }
        }
        console.log(counter);
    }
}solve([ '1 2 3 4 5 4 0 3 2 1',
'Complete 0',
'Complete 1',
'Complete 2',
'Drop 3',
'Change 4 1',
'Count Completed',
'End' ]

);