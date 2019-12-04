function crystal(arr){
    let desiredThickness = arr.shift();
    for(let i = 0;i<arr.length;i++){
        let startThickness = arr[i];
    let counter = 0;
    console.log(`Processing chunk ${startThickness} microns`);
        while(startThickness/4>=desiredThickness){
            startThickness /=4;
            counter++;
            if(startThickness/4<desiredThickness){
                console.log(`Cut x${counter}\nTransporting and washing`);
                break;
            }
        } 
    Math.floor(startThickness);
        counter = 0;
        while(startThickness*0.8>=desiredThickness){
            startThickness*=0.8;
            counter++;
            if(startThickness*0.8<desiredThickness){
                console.log(`Lap x${counter}\nTransporting and washing`);
                break;
            }
        } 
    Math.floor(startThickness);
        counter = 0;
        while(startThickness-20>=desiredThickness){
            startThickness-=20;
            counter++;
            if(startThickness-20<desiredThickness){
                console.log(`Grind x${counter}\nTransporting and washing`);
                break;
            }
        } 
    Math.floor(startThickness);
        counter = 0;
        while(startThickness-2>=desiredThickness){
            startThickness-=2;
            counter++;
            if(startThickness-1<desiredThickness){
                console.log(`Etch x${counter}\nTransporting and washing`);
                break;
            }
        } 
    Math.floor(startThickness);
    if(startThickness+1===desiredThickness){
        console.log(`X-ray x1`);
    } console.log(`Finished crystal ${desiredThickness} microns`);
    }
}crystal([1000,4000, 8100]);