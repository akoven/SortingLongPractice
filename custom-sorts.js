/*
- looking at the age property of users
- set a variable to the age property
- apply sort method
*/

function ageSort(users) {
  return users.sort(
    ((a, b) => {
      return a.age - b.age;
    })
  );
}


function oddEvenSort(arr) {
  arr.sort( (a,b) => a - b);
  return arr.sort(
    ((a, b) => {
      return (b % 2) - (a % 2);
    })
  );
}

function validAnagrams(s, t) {
  let arrS = s.split('')
  let arrT = t.split('')
  arrS.sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0))
  arrT.sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0))
  // console.log(arrS)
  // console.log(arrT)
  return arrS.join('') === arrT.join('')
}

function reverseBaseSort(arr) {
arr.sort( (a,b) => a - b);
return arr.sort((a,b) => baseLog(b) - baseLog(a))
}
function baseLog(x) {
  // if (x === 0) return 0;
  return Math.floor(Math.log(x) / Math.log(10))
}

function frequencySort(arr) {
  // get an obj with { number: frequency}
  let frequencies = getFreq(arr);
  // sort by decreasing value
  arr.sort( (a,b) => b - a);
  // sort by increasing frequency
  // arr.sort( (a,b) => numCount(arr, a) - numCount(arr, b));
  arr.sort( (a,b) => frequencies[a] - frequencies[b]);
  return arr;
}

function getFreq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (obj[number]) obj[number]++;
    else obj[number] = 1;
  }
  return obj;
}

function numCount(arr, target) {
  let count = 0;

  arr.forEach( el => {
    if (el === target) count++;
  })
  return count;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
