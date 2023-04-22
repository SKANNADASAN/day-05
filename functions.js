// anonymous function & IIFE
//(a) Print odd numbers in an array

// IIFE
const num = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

var oddNumber = (function () {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
          console.log("odd Number is" + num[i] );
    }
  }
})();

//Anonymous function
const anonymousfunction = function () {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      console.log(`The Odd numbers is ${num[i]}`);
    }
  }
};

anonymousfunction();

//Arrow function
const evennumbers = () => {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
        console.log(`Then Odd Number is  ${num[i]}`);
    }
  }
};
evennumbers();

// (b) Convert all the strings to title caps in a string array
// Arrow function
const sentanceCasearrow = (str) => {
  if (str === null || str === "") {
    return false;
  } else {
    str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

console.log(sentanceCasearrow('JavaScript Function .To Convert A String To Title Case.'));

// IIFE
function sentanceCase(str) {
  if (str === null || str === "") {
    return false;
  } else {
    str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
} console.log(sentanceCase('JavaScript Function .To Convert A String To Title Case.'));

//Anonymous function

const sentanceCaseanonymous = function (str) {
  if (str === null || str === "") {
    return false;
  } else {
    str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

console.log(sentanceCaseanonymous('wellcome to javascript world'));

//(c) Sum of all numbers in an array
// Arrow function
const array = [3, 2, 5, 1];

var sum = array.reduce((a, b) => {
  return a + b;
});
 console.log("sum is " + sum);

//Anonymous function
const sumofanonymous = array.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(sumofanonymous);

// IIFE
const result = (function () {
  return function result(x, y, z) {
    const arg = [x, y, z];
    return arg.reduce((a, b) => a + b, 0);
  };
})();

console.log(result(1,5,3));

// (d) Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

// IIFE
var primeIIFE = (function () {
  for (i = 0; i < numArray.length; i++) {
    if (numArray % 2 != 0) {
      console.log("Prime number is " + numArray[i]);
    }
  }
})();

// Arrow function
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeArrow = () => {
  for (i = 0; i < numArray.length; i++) {
    if (numArray % 2 != 0) {
      console.log("Prime number is " + numArray[i]);
    }
  }
};
primeArrow();

//(e) Return all the palindromes in an array
//Arrow function
let arr = ["foo", "rececar", "pineapple", "porcupine", "pap", "aaaa"];
let palindromes = arr.filter((pali) => {
  let len = pali.length;
  for (var i = 0; i < len / 2; i++) {
    if (pali[i] == pali[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});

console.log(palindromes);

// IIFE
(  function (arr, n)
        {
            for (let i = 0; i < n; i++)
            {
                let ans = palindromes(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })();

//Arrow function

var palindrome = (arr, n) =>{
    for (var i=0;i<n;i++){
        var answer = palindromes(arr[i]);
        if(answer == false)
        return false;
    }
    return true;
}
 console.log(palindromes)

//(f) Remove duplicates from an array
var arraydup =["apple", "mango", "apple","orange", "mango", "mango","mango"];

function getUnique(arr){
  let uniqueArr = [...new Set(arr)];

   console.log(uniqueArr);
}
var arraydup =["apple", "mango", "apple","orange", "mango", "mango","mango"];
getUnique(arraydup);


//Arrow function

var removeDuplicate = (arr) =>{
  let unique = [...new Set(arr)];
   console.log(unique);
}
removeDuplicate(arraydup);

//IIFE
(function(arr){
let unique = [...new Set(arr)];
 console.log(unique);
})(arraydup);

//(g) Rotate an array by k times
var rotateArr = [1, 3, 5, 7, 9];

function rotateArray(arr,val,pos){
  arr = arr.concat(arr.splice(0,arr.indexOf(val)+pos));
  return arr;
}
var adjustedArray=rotateArray(['N','E','S','W'],'S',1);
 console.log(adjustedArray);

//Arrow function

const rotate = (arr, count = 1) =>{
  return [...arr.slice(count,arr.length),...arr.slice(0, count)];
};

 console.log(rotate(rotateArr,1));
 console.log(rotate(rotateArr,5));

// IIFE
(function(arr,count=1){
  return [...arr.slice(count,arr.length),...arr.slice(0,count)];
})(rotateArr,1);