// const max = Math.max(6, 23, 45, 1, 89, 23)
// const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// const arrayMax = Math.max(...numbers);
// console.log(...num

// console.log(arrayMax)
// const friends = [4, 5, 87, 9];
// const bondhu = friends;
// const dosto = [...friends] // copy
// console.log(dosto)
// friends.push(100)
// console.log(dosto)
// console.log(friends)

// // advanced 
// const sonkha = [...friends, 9999] // add extra elements while copy
// console.log(sonkha)
function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));
const cube=x=> x*x*x; 
console.log(cube(2))
const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);