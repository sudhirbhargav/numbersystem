const numbers = [
  19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];
let primeArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (Isprime(numbers[i])) {
    primeArray.push(numbers[i]);
    console.log(numbers[i]);
  }
}

function Isprime(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      sum++;
    }
  }
  if (sum == 2) {
    return true;
  } else {
    return false;
  }
}

function findmax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findmax(primeArray));
