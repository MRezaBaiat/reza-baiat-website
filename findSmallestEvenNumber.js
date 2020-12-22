function solution (A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = Array.from(new Set(A));
  A.sort((a, b) => a - b);
  A = A.filter((a) => a > 0);

  if (A[0] !== 1) {
    return 1;
  }

  if (A.length === 1) {
    if (A[0] === 1) {
      return 2;
    }
    return 1;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] + 1 !== A[i + 1]) {
      return A[i] + 1;
    }
  }

  return 1;
}

let array = [];

for(let i = 0 ; i < 100000 ; i++){
  array.push(i);
}

const start = Date.now();
const res = solution(array);
console.log((Date.now() - start) + 'ms');
console.log(res);
