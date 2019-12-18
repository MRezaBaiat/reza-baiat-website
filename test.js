
function solution (message, K) {
  if (message.length <= K) {
    return message;
  }

  let text = '';
  let lastIndex = 0;
  while (true) {
    const nextIndex = message.indexOf(' ', lastIndex + 1);
    const nextWord = message.substring(lastIndex, nextIndex);
    if (!nextWord) {
      return text;
    }
    if (nextWord !== ' ') { // you can remove this in case you dont want double spaces to be removed!
      if (text.length + nextWord.length > K) {
        return text.trim();
      }
      text = text.concat(nextWord);
    }
    lastIndex = nextIndex;
  }
}

/*
// 123456
// 12345

function solution (num) {
  const A = String(num).split('');

  let size;
  let removed;
  if (A.length % 2 === 0) {
    size = A.length / 2;
  } else {
    size = (A.length - 1) / 2;
    removed = A[size];
    A.splice(size, 1);
  }

  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(A[i]);
    array.push(A[A.length - 1 - i]);
  }

  if (removed) {
    array.push(removed);
  }
  return Number(array.join(''));
}

const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
solution(arr.join(''));
*/
