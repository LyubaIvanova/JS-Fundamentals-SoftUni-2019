function printFlightStatus(arr){
    let flightObj = {};
    for (let line of arr[0]) {
        let [flightNumber, destination] = line.split(' ');
        flightObj['Destination']= destination;
        flightObj['number']= flightNumber;
        flightObj['Status'] = 'Ready to fly';
        for (let el of arr[1]) {
            let [flightNumberOfChanging, status] = el.split(' '); 
            if(flightObj.hasOwnProperty(flightNumberOfChanging)){
                flightObj['Status'] = status;
            }
        }   console.log(flightObj);
    }
  
    
}printFlightStatus([['WN269 Delaware',
                     'FL2269 Oregon',
                      'WN498 Las Vegas',
                      'WN3145 Ohio',
                      'WN612 Alabama',
                      'WN4010 New York',
                      'WN1173 California',
                      'DL2120 Texas',
                      'KL5744 Illinois',
                      'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
                            ['Cancelled']
]
);