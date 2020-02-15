import runGame from '..';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const operatorList = ['+', '-', '*'];

const calcExpression = (num1, num2, operator) => {
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
  const randomOperator = operatorList[getRandomNum(0, operatorList.length - 1)];
  const firstRandomNum = getRandomNum(1, 10);
  const secondRandomNum = getRandomNum(1, 5);
  const question = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
  const answer = calcExpression(firstRandomNum, secondRandomNum, randomOperator);

  return [question, String(answer)];
};

export default () => runGame(description, getGameData);
