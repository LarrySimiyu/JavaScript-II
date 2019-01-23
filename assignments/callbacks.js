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
  return cb(arr);
}
      getLength(items,arrLength);
      function arrLength(arr) {
        console.log(arr.length);
      } 


function last(arr, cb) {
  // last passes the last item of the array into the callback.

  cb(arr);
}
    last(items, lastFunc);
    function lastFunc(arr) {
      console.log(arr[arr.length - 1]);
    }
   

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);

}
    sumNums(2,7,total);
    function total(x,y) {
      console.log(x+y);

    }

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
    multiplyNums(3,5, mult);
    function mult(x,y) {
      console.log(x*y);
    }



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}


// function higherOrderFunction(param1,param2,callback) {
//   // console.log(`${greeting}, this is my random number: ${random}`);
//   callback(param1,param2);
//  }
 
// higherOrderFunction(3,1,product);

//  // Callback function definition
//  function add(a,b) {
//   console.log(a+b);
//  }
 
//  function subtract(a,b) {
//   console.log(a-b);
//  }
 
//  function product(a,b) {
//   console.log(a*b);
//  } 