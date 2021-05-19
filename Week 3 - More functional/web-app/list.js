const List = Object.create(null);

const new_array = Array;
List.sequence = (n) => new_array(n).fill().map((ignore, k) => k);

List.transpose = (list) => list[0].map(
    (ignore, colIndex) => list.map((row) => row[colIndex])
);

List.range = (start, end, step) => { 
    var step_array=[]; 
    var difference=((end-start)/(step));

    for (var i=0; i<difference; i+=1) {
      step_array.push(start+ (step*i));
    };
    return step_array
}; 

const curry = function (f) {
    return function (first) {
        return function (second) {
            return f(first, second);
        };
    };
};

const zip = function (f) {
    return function ([a,b,c]) {
        return function ([x,y,z]) {
            return [f(a,x), f(b,y), f(c, z)] 
        };
    };
}; 

List.curry_map = (func) => (array) => array.map(func) ;
List.curry_includes = x => array => array.includes(x); 
List.curry_every = func => array => array.every(func); 
List.curry_some= func =>  array => array.some(func); 
List.curry_flatmap= func => array => array.flat_map(func); 
List.first = (array) => array[0]
List.last = array => array[array.length -1]
List.most = array => array.slice(0, array.indexOf(array.length)); 
List.rest = array => array.slice(array[1]); 



List.reject = array => array.filter(x =>(array.filter(func)).includes(x) === false); 

//REJECT FUNCTION
// List.reject = array => array.map((array) => array!==(array.filter(word=> word.length>6))); 
// function arrayRemove(arr, value) { 
    
//     return arr.filter(function(ele){ 
//         return ele != value; 
//     });
// }

// var result = arrayRemove(array, 6);
// function reject(array, iteratorFunction) {
//     return array.filter(el => !iteratorFunction(el));
// // List.reject = (array) => delete[ indexOf(array.filter(!(word=> word.length>6))



const add_3 = function (x) {
    return x + 3;
};

// console.log(List.most([0,1,2,3])); 
// console.log(List.reject(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']));
// console.log(List.curry_includes(3)([0,1,2,3]));
// console.log(List.curry_map(add_3)([0,1,2,3]));
// console.log(List.range(2,5,0.5));

export default Object.freeze(List);
