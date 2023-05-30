type mixed = number | string; // type alias can be use to create your own types. This allows you to avoid repetition 

function combine(input1: mixed, input2: mixed){ // this is a Union type in TS
    let result: mixed;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }
    else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(30,26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

