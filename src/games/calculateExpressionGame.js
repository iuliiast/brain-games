import runGameEngine from '..';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getGameData = () => {
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const firstRandomNum = getRandomNum(1, 10);
  const secondRandomNum = getRandomNum(1, 5);
  const question = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
  const answer = calculate(firstRandomNum, secondRandomNum, randomOperator);

  return [question, String(answer)];
};

export default () => runGameEngine(description, getGameData);
