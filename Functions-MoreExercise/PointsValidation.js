function arePointsValid(arr){
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;
    for (let i of arr) {
        x1 = arr[0];
        x2 = arr[2];
        y1 = arr[1];
        y2 = arr[3];
    }
    function printIsValid(x1,y1,x2,y2){
        if(Number.isInteger(Math.hypot(0-y1, 0-x1))){
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        } else{
            console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
        }
        if(Number.isInteger(Math.hypot(0-y2, 0-x2))){
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        } else{
            console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
        }
        if(Number.isInteger(Math.hypot(y2-y1, x2-x1))){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
        
    }printIsValid(x1,y1,x2,y2);
    
}arePointsValid([2,1,1,1]);