let userName: string; // type assignment or annotation
let userAge = 24;

userName = "max";

function add(a: number, b = 5) {
  return a + b;
}

add(10);
