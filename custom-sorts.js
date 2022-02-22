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
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
