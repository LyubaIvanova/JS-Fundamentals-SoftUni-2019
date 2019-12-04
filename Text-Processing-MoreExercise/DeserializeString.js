function solve(params) {
    let sequence = [];
    for(let el of params){
        if(el !== 'end'){
            let[letter, indices] = el.split(':');
            let indicesArr = indices.split('/');
            
            for(let indx of indicesArr){
                sequence[indx] = letter;
            }
        }
    }

    console.log(sequence.join(''));
}solve([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'
  ]);
  //avjavamsdmcalsdm