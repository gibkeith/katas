function add(a, b) {
  return a + b;

  let sum = add(2, 5);
  console.log(sum);
}

function multiply(a, b) {
  let count = 0;
  let answer = 0;
  while (count < b) {
    answer = add(a, answer);
    count++;
  }
  return answer;
}
console.log(multiply(6, 4));

function power(c, d) {
  let count = 0;
  let answer = 1;
  while (count < d) {
    answer = multiply(c, answer);
    count++;
  }
  return answer;
}

console.log(power(4, 6));

function factorial(e) {
  let count = 0;
  let answer = 1;
  let decreaser = e;
  while (count < e) {
    answer = multiply(decreaser, answer);
    decreaser--;
    count++;
  }
  return answer;
}
console.log(factorial(4));
