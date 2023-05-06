//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order








//Given an array of objects, each object representing a person with a name and age property, write a function that returns the sum of all people who are less than 18 years.
//const people = [
 // { name: 'Alice', age: 17 },
 // { name: 'Eunice', age: 22 },
 // { name: 'Charlie', age: 14 },
  //{ name: 'Max', age: 19 },
//];
function sumAge(people) {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].age < 18) {
      sum += people[i].age;
    }
  }
  return sum;
}
console.log(underAge(people));

 //Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
 let arr = [-1, -2, -3, 0, 0, 5, 12, 0, -10];
function checkNums(arr) {
  arr.forEach(function(a) {
    if (a < 0)
      return "negative"
    else if (a > 0)
      return "positive"
    else
      return "zero"
  });
}
console.log(checkNums(arr));




//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.