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
  //   let newArr = []
  //   for (const user of users) {
  // newArr.push(user.firstName)
  //   }
  //  users.forEach(user => {
  // newArr.push(user.firstName)
  // })
  //  return newArr;
}


function oddEvenSort(arr) {
  // Your code here
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
