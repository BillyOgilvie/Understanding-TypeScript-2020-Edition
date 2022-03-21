function add(n1: number, n2: number, showResult: boolean, phrase = ''): number {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);
  else return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPharse = 'Result is: ';

add(number1, number2, printResult, resultPharse);
