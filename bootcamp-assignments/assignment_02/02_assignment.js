/*
Name: Esteban Mundo
Date: May 29th, 2019

This is cuny2X second assignment involving
the recreation of several JS functions

*/




//Problem #1
//forEach()
function myEach(arr, functionName){
  for(let i = 0; i < arr.length; i++){
    functionName(arr[i]);
  }
}

//Problem #2
//map()
function myMap(arr, formula){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(formula(arr[i]));
  }
  return newArr;
}


//Problem #3
//filter()
function myFilter(arr, comparison){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    //Add Elements that match with given into new Array
    if(comparison(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//Problem #4
//some()
function mySome(arr, comparison){
  for(let i = 0; i < arr.length; i++){
    //Only one has to be matching
    if(comparison(arr[i])){
      return true;
    }
  }
  return false;
}

//Problem #5
//every()
function myEvery(arr, comparison){
  for(let i = 0; i < arr.length; i++){
    //All values have to be matching
    if(!comparison(arr[i], i, arr, this)){
      return false;
    }
  }
  return true;
}


//Problem #6
//reduce()
function myReduce(arr, reducer, initialValue = 0){
  //Setting to optional value
  let accum = initialValue;
  for(let i = 0; i < arr.length; i++){
    /*
      The reducer can have up to 4 parameters
      JS apparently is okay to give extra parameters
      regardless how many the cb function has
    */
    accum = reducer(accum, arr[i], i, arr);
  }
  return accum;
}

//Problem #7
//includes()
function myIncludes(arr, value){
  for(let i = 0; i < arr.length; i++){
    // Unlike some, this checks for VALUE, rather than
    // passing an expression / function
    if(arr[i] === value){
      return true;
    }
  }
  return false;
}

//Problem #8
//indexOf()
function myIndexOf(arr, value, start = 0){
  for(let i = start; i < arr.length; i++){
    if(arr[i] === value){
      return i;
    }
  }
  return -1;
}

//Problem #9
//push()
function myPush(arr, elementToAdd){
  arr[arr.length] = elementToAdd;
}

//Problem #10
//lastIndexOf()
function myUnshift(arr, value){
  let pos = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      pos = i;
    }
  }
  return pos;
}

//Problem #11
//Object.keys()
function grabKeys(object){
  let arrKeys = [];
  //Allows us to obtain key
  for(let i in object){
    myPush(arrKeys,i);
  }
  return arrKeys;
}

//Problem #12
//Object.values()
function grabValues(object){
  let arrValues = [];
  for(let i in object){
    myPush(arrValues, object[i]);
  }
  return arrValues;
}


//Testing Examples

//Question 1
console.log("Question #1");
const items = ['item1', 'item2', 'item3'];
const items2 = [[1,2,3],[4,5,6]];
var result = [];

items.forEach(function(item){
  result.push(item);
});

console.log(result);
result = [];

myEach(items, function(item){result.push(item);});
console.log(result);

//Question 2
console.log("Question #2");
//Doing a test for 2D array to prove someone wrong
const Arraytwo = [[1,2,3], [4,5,6]];
console.log(Arraytwo);
result = Arraytwo.map(x => x * 2);
console.log(result);

//Actual result
result = myMap([1,2,3], x => x* 2);
console.log(result);

result = [1,2,3].map(x => x * 2);
console.log(result);

//Question 3
console.log("Question #3");
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
result = words.filter(word => word.length > 6);
console.log(result);

result = myFilter(words, word => word.length > 6);
console.log(result);

//Question 4
console.log("Question #4");
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
console.log(mySome(array, even));

//Question 5
console.log("Question #5");
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

array = [1, 30, 39, 29, 10, 13];

console.log(array.every(isBelowThreshold));
console.log(myEvery(array, isBelowThreshold));



//Question 6
console.log("Question #6");
array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));
console.log(myReduce(array, reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array.reduce(reducer, 5));
console.log(myReduce(array, reducer, 5));
// expected output: 15

//Question 7
console.log("Question #7");

console.log(array.includes(2));
console.log(myIncludes(array, 2));
// expected output: true


//Question 8
console.log("Question #8");
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
console.log(myIndexOf(beasts, 'bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
console.log(myIndexOf(beasts, 'bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
console.log(myIndexOf(beasts, 'giraffe'));
// expected output: -1



//Question 9
console.log("Question #9");
result = [1,2,3];
result.push(5);
console.log(result);


myPush(result, 42);
console.log(result);

//Question 10
console.log("Question #10");
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
console.log(myUnshift(animals, 'Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
console.log(myUnshift(animals, 'Tiger'));
// expected output: 1

//Creating object for Question 11 and 12
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

//Question 11
console.log("Question #11");
console.log(Object.keys(object1));
console.log(grabKeys(object1));

//Question 12
console.log("Question #12");
console.log(Object.values(object1));
console.log(grabValues(object1));

 