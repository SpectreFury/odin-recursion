function fibs(n) {
  const result = [];
  let firstNum = 0;
  let secondNum = 1;
  let nextTerm = firstNum + secondNum;

  for (let i = 0; i < n; i++) {
    result.push(firstNum);

    firstNum = secondNum;
    secondNum = nextTerm;
    nextTerm = firstNum + secondNum;
  }

  return result;
}

function fibsRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}
