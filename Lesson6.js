let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let string = "Aboba";

console.log(array.length)
console.log(string.length)

console.log(array[3])
console.log(string[3])

console.log(array.indexOf(1));
console.log(string.indexOf('o'))

console.log(string.toUpperCase());

let longString = 'Hello World!';
let sliceString = longString.slice(6,11);

console.log(sliceString)
console.log(array.slice(1,3))

console.log(sliceString.substr(1,3))

array.push(22);
array.pop();

array.unshift(1);
array.shift();

console.log(array);
array.splice(1, 0, );
console.log(array);

array.reverse();
console.log(array)
array.reverse();
