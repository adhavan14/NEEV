let args = [1,2,3,4,8,5,6,7]

function customMap(arg, callback) {

    let result = [];
    for (let i = 0;i< arg.length;i++) {
        result.push(callback(arg[i]);
    }
    return result;
}

let mapResult = customMap(args, (num) => num*2);
console.log(mapResult);

function customFilter(arg, callback) {

    let result = [];
    for (let i=0; i<arg.length; i++) {
        if(callback(arg[i])) {
            result.push(arg[i]);
        }
    }

    return result;
}

let filterResult = customFilter(args, (num) => num%2 === 1)
console.log(filterResult);


function customForeach(arg, callback){
    for (let i = 0; i<arg.length; i++) {
        callback(arg[i]);
    }
}


customForeach(args, (num) => console.log(num));


function customReduce(arg, callback, initialValue) {
    let accumulator = initialValue;
    for (let i =0 ;i< arg.length;i++) {
            accumulator = callback(accumulator, arg[i])
    }

    return accumulator;
}

let total = customReduce(args, (acc, num) => num + acc, 0);
console.log(total);
