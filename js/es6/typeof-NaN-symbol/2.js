// const RED = 'red'
// const BLUE = 'blue'
// const ORANGE = 'orange'
// const YELLOW = 'yellow'
// const cat = 'blue'

const RED = Symbol('red');
const BLUE = Symbol('blue');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
function getThreatLevel(color){
    switch (color){
        case RED:
            return 'severe';
        case ORANGE:
            return 'high';
        case YELLOW:
            return 'elevated';
        case BLUE:
            return 'low';
        default:
            console.log("I DON'T KNOW THAT COLOR!");
    }
}

const length = Symbol('length');

class Train {
    constructor(){
        this[length] = 0;
    }
    add(car,contents){
        this[car] = contents;
        this[length]++;
    }
}

let freightTrain = new Train();
freightTrain.add('refrigerator car','cattle');
freightTrain.add('flat car','aircraft parts');
freightTrain.add('rank car','milk');
freightTrain.add('hopper car','coal');

for(car in freightTrain){
    console.log(car, freightTrain[car]);
    
}
const sym1 = Symbol('cat')
const sym2 = Symbol('cat')
console.log(sym1 == sym2);
console.log(sym1 == sym1);

