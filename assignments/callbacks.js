// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, (length) => {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, (last) => {
  console.log(last);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(1, 4, (nums) => {
  console.log(nums);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

multiplyNums(5,3, (product) => {
  console.log(product);
});


//Function Contains Solution #1
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)){
    return cb(true);
  } else {
    return false;
  }
}
//Contains solution #2
function contains(item, list, cb) {
  return (list.includes(item)) ? cb(true) : false
}

contains('booty', items, (trueOrFalse) => {
  console.log(trueOrFalse);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let result = array;
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < result.length; j++){
      if(array[i] === result[j]){
        result.splice(j, 1);
      }
    }
    return result;
  }
}

function removeDuplicates(array,cb) {
  let result = [...new Set(array)];
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(result);
}

let item = [1,2,2,3,3,3,4,5,6,7,7,7,7];
console.log(removeDuplicates(item));
